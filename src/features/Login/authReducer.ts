import {Dispatch} from 'redux'
import {
    AppActionsType,
    SetAppErrorActionType,
    setAppStatusAC,
    SetAppStatusActionType,
    setInitializedAC
} from '../../app/app-reducer'
import {authAPI} from "../../api/authAPI";
import {handleServerAppError, handleServerNetworkError} from "../../utils/error-utils";

export type LoginPayloadType = {
    email: string
    password: string
    rememberMe: boolean
    captcha?: string
}

export enum ResponseResulCode {
    OK = 0,
    Error = 1,
    Captcha = 10
}

const initialState = {
    isLoggedIn: false,
}
type InitialStateType = typeof initialState

export const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'login/SET-IS-LOGGED-IN':
            return {...state, isLoggedIn: action.value}
        default:
            return state
    }
}
// actions
export const setIsLoggedInAC = (value: boolean) =>
    ({type: 'login/SET-IS-LOGGED-IN', value} as const)

// thunks
export const loginTC = (payload: LoginPayloadType) => async (dispatch: Dispatch<ActionsType>) => {
    dispatch(setAppStatusAC('loading'))
    try {
        const res = await authAPI.login(payload)
        if (res.data.resultCode === ResponseResulCode.OK) {
            dispatch(setIsLoggedInAC(true))
            dispatch(setAppStatusAC('succeeded'))
        } else {
            handleServerAppError(res.data, dispatch)
        }
    } catch (error) {
        //@ts-ignore
        handleServerNetworkError(error, dispatch)
    }
}

export const meTC = () => (dispatch: Dispatch<ActionsType>) => {
    dispatch(setAppStatusAC('loading'))
    dispatch(setInitializedAC(false))
    authAPI.me()
        .then((res) => {
            if (res.data.resultCode === ResponseResulCode.OK) {
                dispatch(setIsLoggedInAC(true))
                dispatch(setAppStatusAC('succeeded'))
            } else {
                handleServerAppError(res.data, dispatch)
            }
        })
        .catch(error => handleServerNetworkError(error, dispatch))
        .finally(() => dispatch(setInitializedAC(true)))
}

export const logoutTC = () => (dispatch: Dispatch<ActionsType>) => {
    dispatch(setAppStatusAC('loading'))
    authAPI.logout()
        .then(res => {
            if (res.data.resultCode === ResponseResulCode.OK) {
                dispatch(setIsLoggedInAC(false))
                dispatch(setAppStatusAC('succeeded'))
            } else {
                handleServerAppError(res.data, dispatch)
            }
        })
        .catch((error) => {
            handleServerNetworkError(error, dispatch)
        })
}

// types
type ActionsType = ReturnType<typeof setIsLoggedInAC> | AppActionsType

