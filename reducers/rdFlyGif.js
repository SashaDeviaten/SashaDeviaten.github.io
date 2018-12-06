import {BLOCK_FLY_GIF, SHOW_FLY_GIF} from "../actions/actionsTypes";


const initialState = {

    isShow: false,
    isBlocked: false

};

const frFlyGif = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_FLY_GIF:
            return Object.assign({}, state, {
                isShow: action.bool
            });
        case BLOCK_FLY_GIF:
            return Object.assign({}, state, {
                isBlocked: true,
                isShow: false,
            });
        default:
            return state
    }
};

export default frFlyGif;