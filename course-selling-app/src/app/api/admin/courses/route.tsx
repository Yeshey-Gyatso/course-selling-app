import { connectDb } from "@/helper/db";
import { getResponseMessage } from "@/helper/error";
import { Course } from "@/models";
import { NextResponse } from "next/server";
connectDb();

export async function GET(request:Request,response:NextResponse){
    
    try {
        const courses = await Course.find();
        return NextResponse.json(courses);
        }

     catch (error) {

        return getResponseMessage("error in getting data !!" ,404,false);
        // console.log(error);
        // console.log("failed to get the courses from admin")
        // return NextResponse.json({
        //     message:"failed to get courses from admin",
        //     success:false
        // })
        
        
    }
       
}




export async function POST(request:Request,response:NextResponse){

    const {title,description,price,imageLink} =await  request.json();

    const course=new Course({
        title,
        description,
        price,
        imageLink,
      

    });
 try {
    const createdCourse =await course.save(); 

    const response =NextResponse.json(course,{status:201})
    return response;
 } catch (error) {
    console.log(error);
   return NextResponse.json({
            message:"failed to create courses",
            status:false,
        })
    
 }

}
