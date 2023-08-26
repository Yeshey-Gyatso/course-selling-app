import { Course, User } from "@/models";
import { connectDb } from "@/helper/db";
import { NextResponse } from "next/server";
import { getResponseMessage } from "@/helper/error";



export async function GET(request:Request,response:NextResponse){
    
    try {await connectDb();
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