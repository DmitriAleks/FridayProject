import axios from "axios";



const instance = axios.create({
    baseURL:  "http://localhost:7542/2.0/",
    withCredentials: true,
})
export const api = {
 inLogin(email: string, password: string, rememberMe: boolean) {
     const promise = instance.post("auth/login",{email,password, rememberMe})
     return promise
 },
    inRegistr(email: string, password: string) {
        const promise = instance.post("auth/register",{email,password, })
        return promise
    },
    authME() {
    const promise = instance.post("auth/me",)
    return promise
},
}
export const apiCart = {
    getCard(){
        const promise = instance.get('cards/pack')
        return promise
    }
}

