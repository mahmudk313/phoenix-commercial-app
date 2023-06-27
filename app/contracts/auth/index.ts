export interface LoginFormValuesInterface {
    email?: string,
    password?: string,
    phone : number
}

export interface RegisterFormValuesInterface {
    name ?: string,
    lastName ?: string,
    email ?: string,
    password ?: string,
    phone ?: number
}

export interface VerifyPhoneFormValuesInterface {
    code : number,
    token : any
}