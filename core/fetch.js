import {default as isoFetch} from 'isomorphic-fetch';

const key = 'DEVIATEN_JULIET_PROJECT';

const uniFetch = options => {

    const fetchOptions = {...options.fetchOptions};


    isoFetch('https://fe.it-academy.by/AjaxStringStorage2.php', fetchOptions)
        .then(function (response) {
            if (!response.ok) {
                let Err = new Error("fetch error " + response.status);
                Err.userMessage = "Ошибка связи";
                throw Err;
            } else {
                return response.text()
            }
        })
        .then(function (data) {
            if (data) {
                    data = JSON.parse(data);

                try {
                    options.cbGetData(data);
                }
                catch (error) {
                    console.error(error);

                    options.cbError(error.message);
                }
            }
        })
        .catch(function (error) {
            // fetchError(error.userMessage || error.message);
            console.log(error)
        })
    ;
};

const fetchPromise = options => new Promise((resolve, reject) => uniFetch({
    ...options,
    cbError: data => reject(data),
    cbGetData: data => resolve(data),
}));

export const addCodeFetch = async code => {
    getCodes().then(codesArr => {
        let now = new Date();
        let date = '' + now.getDate() + '.' + now.getMonth() + '.' + now.getFullYear();
        codesArr.push({code, date});
        setCodes(codesArr)
    });
};

export const removeCodeFetch = async index => {
    getCodes().then(codesArr => {
        codesArr.splice(index, 1);
        setCodes(codesArr)
    });
};

export const getCodes = async () => {
    let answer;

    let usp = new URLSearchParams();
    usp.append('f', 'READ');
    usp.append('n', key);

    try {
        answer = await fetchPromise({
            fetchOptions: {
                method: 'POST',
                body: usp,
            }
        });
    } catch (e) {
        console.log('error', e);
    }

    return JSON.parse(answer.result);
};

const lockGet = async (updatePassword) => {

    let usp = new URLSearchParams();
    usp.append('f', 'LOCKGET');
    usp.append('n', key);
    usp.append('p', String(updatePassword));

    try {
        await fetchPromise({
            fetchOptions: {
                method: 'POST',
                body: usp,
            }
        });
    } catch (e) {
        console.log('error', e);
    }
};

export const setCodes = async (codes) => {

    const updatePassword = Math.random();
    await lockGet(updatePassword);

    let usp = new URLSearchParams();
    usp.append('f', 'UPDATE');
    usp.append('n', key);
    usp.append('v', JSON.stringify(codes));
    usp.append('p', String(updatePassword));

    try {
        await fetchPromise({
            fetchOptions: {
                method: 'POST',
                body: usp,
            }
        });
    } catch (e) {
        console.log('error', e);
    }
};