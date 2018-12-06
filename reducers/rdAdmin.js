import {ADMIN} from "../actions/actionsTypes";


const initialState = {

    admin: false,

};

const rdAdmin = (state = initialState, action) => {
    switch (action.type) {
        case ADMIN:
            return Object.assign({}, state, {
                admin: true
            });
        default:
            return state
    }
};

export default rdAdmin;