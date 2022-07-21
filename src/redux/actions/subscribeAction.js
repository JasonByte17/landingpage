import { RESET_DATA, SUSCRIBE_ERROR, SUSCRIBE_REQUESTED, SUSCRIBE_SUCCESS } from "."

export const subscribeRequested = (data) => ({
    type: SUSCRIBE_REQUESTED,
    payload: data
})

export const subscribeSuccess = () => ({
    type: SUSCRIBE_SUCCESS,
})

export const subscribeError = (msg) => ({
    type: SUSCRIBE_ERROR,
    payload: msg
})

export const resetData = () => ({
    type: RESET_DATA,
})

