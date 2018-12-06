export const getRandomInt = (min=0, max=9) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const generateCode = (length = 5) => {
    let code = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < length; i++)
        code += possible.charAt(Math.floor(Math.random() * possible.length));

    return code;
};