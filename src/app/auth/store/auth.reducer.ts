import * as AuthAction from './auth.action';


export interface State {
    isAuthenticated: boolean,
    token: string
}

const initialState: State = {
    isAuthenticated: false,
    token: null
}

export function AuthReducer(state = initialState, action: AuthAction.AuthActions) {

    switch (action.type) {
        case AuthAction.SIGN_IN:
        case AuthAction.SIGN_UP:
            return {
                ...state,
                isAuthenticated: true,
            }
        case AuthAction.LOGOUT:
            return {
                ...state,
                isAuthenticated: false,
                token: null
            }
        case AuthAction.SET_TOKEN:
            return {
                ...state,
                token: action.payload
            }
        default:
            return state;
    }

}