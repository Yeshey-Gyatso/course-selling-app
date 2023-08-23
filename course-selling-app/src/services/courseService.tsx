import {httpAxios} from "../helper/httpHelper";
export async function addCourse(course:any){
   const result=await httpAxios
   .post("/api/admin/courses",course)
   .then((response)=>response.data)
return result
}

export async function GetCourse(){
   const result = await httpAxios
   .get("/api/users/courses")
   .then(response=>response.data)
   return result
}