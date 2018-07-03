import { Action } from "@ngrx/store";

export const SIGN_IN = 'SIGN_IN';
export const SIGN_UP = 'SIGN_UP';
export const LOGOUT = 'LOGOUT';
export const SET_TOKEN = 'SET_TOKEN';
export const TRY_SIGNUP = 'TRY_SIGNUP';
export const TRY_SIGNIN = 'TRY_SIGNIN';
export const TRY_LOGOUT = 'TRY_LOGOUT';
export class TryLogout implements Action {
    readonly type = TRY_LOGOUT;
    constructor() { }
}
export class TrySignUp implements Action {
    readonly type = TRY_SIGNUP;
    constructor(public payload: { username: string, password: string }) { }
}
export class SignIn implements Action {
    readonly type = SIGN_IN;
}
export class SignUp implements Action {
    readonly type = SIGN_UP
}
export class Logout implements Action {
    readonly type = LOGOUT;
}
export class SetToken implements Action {
    constructor(public payload: string) { }
    readonly type = SET_TOKEN;
}
export class TrySignIn implements Action {
    constructor(public payload: { username: string, password: string }) { }
    readonly type = TRY_SIGNIN;
}
export type AuthActions = SignIn | SignUp | Logout | SetToken | TrySignUp | TrySignIn | TryLogout;