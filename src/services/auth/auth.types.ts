export interface IUser {
    id: number
    name?: string
    email: string
}

export interface IAuthResponse {
    accessToken: string
    user: IUser
}

export interface IFormData {
    email: string
    password: string
}
