import { createStore } from "redux";

import { rootReducer } from './reducers'

var initState = {
    showMusic: false,
    hiddenTabbar: false,
    listCollection:[],
    listMusic:[]
};

export const store = createStore(rootReducer,initState);