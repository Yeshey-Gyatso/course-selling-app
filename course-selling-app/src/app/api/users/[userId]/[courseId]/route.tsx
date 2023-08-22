import { Course, User } from "@/models";
import { connectDb } from "@/helper/db";
import { NextResponse } from "next/server";
import { getResponseMessage } from "@/helper/error";




export async function POST(request:Request,{params}){
    try {await connectDb();
        const {courseId,userId}=params;
        
        
        
        let course=await Course.findById(courseId);
        if(course){
            const user=await User.findById(userId);
            if(user){
                user.purchasedCourses.push(courseId);
                await user.save();
                // course.status=status
                return getResponseMessage("successfully added Purchased Course",200,true);
            }{
                return getResponseMessage("user not found",400,false);
            }
        }else{
            return getResponseMessage("course not found",400,false);
        }
           
    } catch (error) {
        console.log(error);
        return getResponseMessage("Error in purchase course",500,false)
        
    }
}


export async function GET(request:Request,{params}){
   
    try {
        const {courseId,userId}=params;
        
        const user=await User.findById(userId);
        console.log(user)
        const course=await Course.findById(courseId);
        console.log(course)
        return NextResponse.json(user)

        }

     catch (error) {
        console.log(error);
        console.log("failed to get the users")
        return NextResponse.json({
            message:"failed to get users",
            success:false
        })
        
        
    }
      
}

