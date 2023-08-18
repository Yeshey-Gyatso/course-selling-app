import { connectDb } from "@/helper/db";
import { getResponseMessage } from "@/helper/error";
import { Course } from "@/models";
import { NextResponse } from "next/server";
connectDb();

//single course route
export async function GET(request:Request,{params}){
    const {courseId}=params;
    try {
        const course = await Course.findById(courseId);
        return NextResponse.json(course);
        }

     catch (error) {
        console.log(error);
        return getResponseMessage("error in getting data from admin-courseId !!" ,404,false);
    
    }
}


export async function PUT(request:Request,{params}){
    try {
        const {courseId}=params;
        const {title,description,price,imageLink}=await request.json();
        let course=await Course.findById(courseId);

        course.title =title,
        course.description =description,
        course.price =price,
        course.imageLink =imageLink
   
        const updatedCourse=await course.save();
        return NextResponse.json(updatedCourse);
    } catch (error) {
        console.log(error);
        return getResponseMessage("Error in updating course by id",500,false)
        
    }
}

export async function DELETE(request:Request,{params}){
    try {
        const {courseId}=params;
        await Course.deleteOne({
            _id:courseId,
        });
        return getResponseMessage("Course deleted!!",200,true);
    } catch (error) {
        console.log(error);
        return getResponseMessage("error in deleting Course",500,false);
        
    }
}