
import { connectDb } from "@/helper/db";
import { User } from "@/models";

import { NextResponse } from "next/server";

connectDb();

export async function GET(request:Request,response:NextResponse){
    
    try {
    const users = await User.find();
    return NextResponse.json(users);
       
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


export async function POST(request:Request,response:NextResponse){

    const {username,email,password,profileUrl,purchasedCourses} =await  request.json();

    const user=new User({
        username,
        password,
        email,
        profileUrl,
        purchasedCourses
    });
 try {
    const createdUser =await user.save();

    const response = NextResponse.json(user,{status:201})
    return response;
 } catch (error) {
    console.log(error);
   return NextResponse.json({
            message:"failed to create user",
            status:false,
        },
        {
            status:500,
        })
    
 }
}
