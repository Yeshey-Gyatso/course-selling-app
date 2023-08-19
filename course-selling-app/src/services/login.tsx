import {httpAxios} from "../helper/httpHelper";
export async function loginApi(course:any){
   const result=await httpAxios
   .post("/api/admin/courses",course)
   .then((response)=>response.data)
return result
}