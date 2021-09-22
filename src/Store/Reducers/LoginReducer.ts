import { Dispatch } from "redux";
import { api } from "../../Dal/Api";
import { authMe } from "./AppReducer";
import { addedUsersProfileAC } from "./ProfileReducer";

const initialState = {
    isLoggedIn: false
}
type initialState = typeof initialState
export const loginReducer = (state:initialState = initialState, action: ActionsType): initialState => {
    switch (action.type) {
        case 'login/SET-IS-LOGGED-IN':
            return {...state, isLoggedIn: action.status}
        default:
            return state
    }
    return state
};

//actions
export const setIsLoggedInAC = (status: boolean) => {
    return {
        type: 'login/SET-IS-LOGGED-IN',
        status
    } as const
}
//type
type ActionsType = ReturnType<typeof setIsLoggedInAC>
//thumk
export const isLoginTC = (email:string, password:string,rememberMe:boolean) => (dispatch: Dispatch) => {
    api.inLogin(email, password, rememberMe)
        .then((res)=>{
            dispatch(authMe(true))
            dispatch(setIsLoggedInAC(true))
            dispatch(addedUsersProfileAC(res.data))
            console.log('сработала isLoginTC true ')
       
        })
}