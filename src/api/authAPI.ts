import {instance, ResponseType} from "./todolists-api";
import {LoginPayloadType} from "../features/Login/authReducer";
type AuthMeResponseType = {
    id: number
    login: string
    email: string
}
export const authAPI = {
    login(payload: LoginPayloadType ){
        return instance.post<ResponseType<{userId: string}>>('/auth/login', payload)
    },
    me(){
        return instance.get<ResponseType<AuthMeResponseType>>('auth/me')
    },
    logout(){
        return instance.delete<ResponseType>('/auth/login')
    }
}