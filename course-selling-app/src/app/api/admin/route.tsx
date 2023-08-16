import { Admin } from "@/models";
import { connectDb } from "@/helper/db";
import { NextResponse } from "next/server";

connectDb();

export async function GET(request:Request,response:NextResponse){
    let admins=[]
    try {
        admins = await Admin.find();
       
        }

     catch (error) {
        console.log(error);
        console.log("failed to get the admins")
        return NextResponse.json({
            message:"failed to get users",
            success:false
        })
        
        
    }
    return NextResponse.json(admins);   
}


export async function POST(request:Request,response:NextResponse){

    const {username,password} =await  request.json();

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