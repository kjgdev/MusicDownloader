import { SHOW_CONTROL_MUSIC } from './constrans';

export const showMusicControl = (status:boolean) => {
    return {
        type: SHOW_CONTROL_MUSIC,
        payload: status
    }
}