import { applyMiddleware, combineReducers, createStore } from 'redux';
import {loginReducer} from './Reducers/LoginReducer'
import {registrationReducer} from './Reducers/RegistrationReducer'
import {profileReducer} from './Reducers/ProfileReducer'
import thunk from 'redux-thunk';
import { appReducer } from './Reducers/AppReducer';



export type ActionType = {}

const rootReducer = combineReducers({
    login: loginReducer,
    registration: registrationReducer,
    profile: profileReducer,
    app: appReducer,
})
// непосредственно создаём store
export const store = createStore(rootReducer, applyMiddleware(thunk));
// определить автоматически тип всего объекта состояния

export type AppRootStateType = ReturnType<typeof rootReducer>
//export type AppDispatchType = Dispatch<ActionType>


// @ts-ignore
window.store = store;