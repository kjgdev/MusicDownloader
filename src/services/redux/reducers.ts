import { ListMusic } from '@scenes';
import { HIDDEN_TABBAR, SHOW_CONTROL_MUSIC, LOAD_COLLECTION, LOAD_MUSIC, EDIT_MODE, ADD_ITEM_COLL_EDIT, REMOVE_ITEM_COLL_EDIT, ADD_ITEM_MUSIC_EDIT, REMOVE_ITEM_MUSIC_EDIT, SHOW_POPUP_RENAME, RESET_EDIT, SET_SOUND, SET_SOUND_STATUS, SET_CURRENT_SOUND } from './constrans';

var initState = {
    showMusic: false,
    hiddenTabbar: false,
    editMode: false,
    listCollection: [],
    listMusic: [],
    listCollectionEdit: [],
    listEditMusic: [],
    popupRename: false,
    soundTask: undefined,
    soundTaskStatus: false,
    currentMusic: []
};

export const rootReducer = (state: any = initState, action: any) => {
    switch (action.type) {
        case SHOW_CONTROL_MUSIC: {
            return {
                ...state,
                showMusic: action.payload
            }
        }
        case SHOW_POPUP_RENAME: {
            return {
                ...state,
                popupRename: action.payload
            }
        }
        case HIDDEN_TABBAR: {
            return {
                ...state,
                hiddenTabbar: action.payload
            }
        }
        case LOAD_COLLECTION: {
            return {
                ...state,
                listCollection: action.payload,
                listCollectionEdit: []
            }
        }
        case LOAD_MUSIC: {
            return {
                ...state,
                listMusic: action.payload
            }
        }
        case EDIT_MODE: {
            return {
                ...state,
                editMode: action.payload,
                listCollectionEdit: [],
                listEditMusic: []
            }
        }
        case ADD_ITEM_COLL_EDIT: {
            return {
                ...state,
                listCollectionEdit: [
                    ...state.listCollectionEdit,
                    action.payload
                ]
            }
        }
        case REMOVE_ITEM_COLL_EDIT: {
            return {
                ...state,
                listCollectionEdit: state.listCollectionEdit.filter(item => item.id !== action.payload.id)
            }
        }
        case ADD_ITEM_MUSIC_EDIT: {
            return {
                ...state,
                listEditMusic: [
                    ...state.listEditMusic,
                    action.payload
                ]
            }
        }
        case REMOVE_ITEM_MUSIC_EDIT: {
            return {
                ...state,
                listEditMusic: state.listEditMusic.filter(item => item.id !== action.payload.id)
            }
        }
        case RESET_EDIT: {
            return {
                ...state,
                listEditMusic: [],
                listCollectionEdit: []
            }
        }
        case SET_SOUND: {
            return {
                ...state,
                soundTask: action.payload
            }
        }
        case SET_SOUND_STATUS: {
            return {
                ...state,
                soundTaskStatus: action.payload
            }
        }
        case SET_CURRENT_SOUND: {
            return {
                ...state,
                currentMusic: action.payload
            }
        }

    }
}