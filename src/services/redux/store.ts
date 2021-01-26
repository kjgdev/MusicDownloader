import { createStore } from "redux";

import { rootReducer } from './reducers'

var initState = {
    showMusic: false,
};

export const store = createStore(rootReducer,initState);