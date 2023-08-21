import { httpAxios } from "@/helper/httpHelper";

export async function signUpapi(user:any){
    
    const result =await httpAxios
    .post("/api/users",user)
    .then((response)=>response.data)
    return result
}

export async function userlogin(LoginData:any){
    const result = await httpAxios.
    post("/api.login",LoginData)
    .then(response=>response.data)
    return result
}