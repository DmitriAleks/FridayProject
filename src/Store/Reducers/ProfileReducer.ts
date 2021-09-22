

const initialState = {
} as UserType
export type UserType = {
    _id: string
    name: string
    email: string
    avatar?: string
    publicCardPacksCount: number
    created: Date
    updated: Date
    isAdmin: boolean
    verified: boolean
    rememberMe: boolean
   error?:string


}
export const profileReducer = (state = initialState, action: AllActionsTypes):UserType => {
    switch (action.type) {
        case "ADDED-USERS-PROFILE": {
            return {...state = action.users}
        }
            default: return state
    }

};

//actions
export const addedUsersProfileAC = (users:UserType) =>{
    return {
        type: 'ADDED-USERS-PROFILE',
        users
    }
}
//types
type AddedUsersProfileAT = ReturnType<typeof addedUsersProfileAC>
type AllActionsTypes = 
    |AddedUsersProfileAT
