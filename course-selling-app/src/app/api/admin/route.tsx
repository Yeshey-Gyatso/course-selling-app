import { Admin } from "@/models";
import { connectDb } from "@/helper/db";
import { NextResponse } from "next/server";

connectDb();

export async function POST(request:Request,response:Response){

    const {username,password} =await request.json();

    const admin=new Admin({
        username,
        password
    });
 try {
    const createdAdmin =await admin.save();

    const response =NextResponse.json(admin,{status:201})
    return response;
 } catch (error) {
    console.log(error);
   return NextResponse.json({
            message:"failed to create admin",
            status:false,
        })
    
 }
}