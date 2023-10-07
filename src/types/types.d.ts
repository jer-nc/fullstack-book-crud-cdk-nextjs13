import { type } from "os"

export interface SignInResponse {
    idToken: {
        jwtToken: string
    }
}

export interface SignUpResponse {
    userSub: string
}

export type ConfirmRegistrationValues = {
    email: string
    code: string
    password: string
}