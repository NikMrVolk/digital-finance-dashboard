export interface IUser {
    id: number
    name?: string
    email: string
}

export interface IAuthResponse {
    accessToken: string
    user: IUser
}

export interface IAuthFormData {
    email: string
    name?: string
    password: string
    confirmedPassword?: string
}
