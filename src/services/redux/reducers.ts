import { SHOW_CONTROL_MUSIC } from './constrans';

var initState = {
    showMusic: false,
};

export const rootReducer = (state: any = initState, action: any) => {
    switch (action.type) {
        case SHOW_CONTROL_MUSIC:{
            return {
                ...state,
                showMusic:action.payload
            }
        }
    }
}