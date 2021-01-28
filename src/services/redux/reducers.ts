import { HIDDEN_TABBAR, SHOW_CONTROL_MUSIC, LOAD_COLLECTION, LOAD_MUSIC } from './constrans';

var initState = {
    showMusic: false,
    hiddenTabbar: false,
    listCollection:[],
    listMusic:[]
};

export const rootReducer = (state: any = initState, action: any) => {
    switch (action.type) {
        case SHOW_CONTROL_MUSIC:{
            return {
                ...state,
                showMusic:action.payload
            }
        }
        case HIDDEN_TABBAR:{
            return {
                ...state,
                hiddenTabbar:action.payload
            }
        }
        case LOAD_COLLECTION:{
            return {
                ...state,
                listCollection:action.payload
            }
        }
        case LOAD_MUSIC:{
            return {
                ...state,
                listMusic:action.payload
            }
        }
    }
}