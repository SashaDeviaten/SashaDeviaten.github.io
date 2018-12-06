import { combineReducers } from 'redux';

import rdFlyGif from "../reducers/rdFlyGif";
import rdAdmin from "../reducers/rdAdmin";

let combinedReducer=combineReducers({
    flyGif: rdFlyGif,
    admin: rdAdmin,
});

export default combinedReducer;
