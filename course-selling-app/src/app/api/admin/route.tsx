import { Admin } from "@/models";
import { connectDb } from "@/helper/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
connectDb();

export async function GET(request:Request,response:NextResponse){
    
    try {
        const admins = await Admin.find();
        return NextResponse.json(admins);
        }

     catch (error) {
        console.log(error);
        console.log("failed to get the admins")
        return NextResponse.json({
            message:"failed to get users",
            success:false
        })
        
        
    }
       
}


export async function POST(request:Request,response:NextResponse){

    const {username,password} =await  request.json();

    const admin=new Admin({
        username,
        password
    });
 try {
    admin.password=await bcrypt.hash(
        admin.password,
       parseInt(process.env.BCRYPT_SALT)
       ); 
       console.log(admin)

    const createdAdmin =await admin.save();

    const response = NextResponse.json(admin,{status:201})
    return response;
 } catch (error) {
    console.log(error);
   return NextResponse.json({
            message:"failed to create admin",
            status:false,
        })
    
 }
}