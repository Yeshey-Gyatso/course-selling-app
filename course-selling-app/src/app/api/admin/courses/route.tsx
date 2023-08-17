import { connectDb } from "@/helper/db";
import { Course } from "@/models";
import { NextResponse } from "next/server";
connectDb();

export async function POST(request:Request,response:NextResponse){
    const course = await request.json();;
    console.log(course);
    
    const newCourse=new Course(course);
    console.log(newCourse);
    await newCourse.save;
 
    return NextResponse.json({
            message:"failed to create course",
            status:false,
        })
    
 }
