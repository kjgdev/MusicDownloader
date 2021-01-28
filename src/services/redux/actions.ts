import { SHOW_CONTROL_MUSIC, HIDDEN_TABBAR, LOAD_COLLECTION, LOAD_MUSIC } from './constrans';

export const showMusicControl = (status: boolean) => {
    return {
        type: SHOW_CONTROL_MUSIC,
        payload: status
    }
}

export const showTabbar = (status: boolean) => {
    return {
        type: HIDDEN_TABBAR,
        payload: status
    }
}

export const loadCollection = (data) => {
    return {
        type: LOAD_COLLECTION,
        payload: data
    }
}

export const loadMusic = (data) => {
    return {
        type: LOAD_MUSIC,
        payload: data
    }
}
