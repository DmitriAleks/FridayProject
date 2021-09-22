import { Dispatch } from "redux"
import { api } from "../../Dal/Api"
import { setIsLoggedInAC } from "./LoginReducer"
import { addedUsersProfileAC } from "./ProfileReducer"

const initialState = {
    isAuth: false
}
type initialStateType = typeof initialState

export const appReducer = (state=initialState , action: AuthMeAT) => {
    switch (action.type) {
        case 'app/AUTH-ME' : {
            return {...state, isAuth: action.isAuth}
        }
        default: return state
    }
}

//actions
export const authMe = (isAuth: boolean) => {
    return {
        type: 'app/AUTH-ME',
        isAuth
    } as const
}
//type 
type AuthMeAT = ReturnType<typeof authMe >
export type AllActionsType = |AuthMeAT
//thunk
export const authMeTC = () => (dispatch: Dispatch) => {
    api.authME().then((res)=>{
        dispatch(authMe(true))
        dispatch(setIsLoggedInAC(true))
        dispatch(addedUsersProfileAC(res.data))
        console.log('сработал autme True')
        console.log(res.data)
    })
        .catch((e)=>{
            dispatch(authMe(false))
            console.log('ошибка')
        })
}
