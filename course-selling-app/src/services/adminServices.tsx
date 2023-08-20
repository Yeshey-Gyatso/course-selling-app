
import { httpAxios } from "@/helper/httpHelper";

export async function signUpapiAdmin(user:any){
    
    const result =await httpAxios
    .post("/api/admin",user)
    .then((response)=>response.data)
    return result
}