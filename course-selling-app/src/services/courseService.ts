//course services
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

export async function Purachased(userId,courseId){
   const result = await httpAxios
   .post(`/api/users/${userId}/${courseId}`)
   .then(response=>response.data)
   console.log(result)
   return result
}

export async function PurachasedCourses(userId){
   const result = await httpAxios
   .get(`/api/users/${userId}/purchasedCourses`)
   .then(response=>response.data)
   console.log(result)
   return result
}