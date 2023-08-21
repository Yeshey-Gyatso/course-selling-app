 import { NextResponse } from "next/server";
 import { User } from "@/models";
import bcrypt from 'bcryptjs';

 export async function POST(request:Request){
    const{email,password}=await request.json();



   
    try {
        //1 checking the user
        const user=await User.findOne({
            email:email,
        });

        if (user==null){
            throw new Error("User not found ")
        }

        //2decrypt 
        const matched=bcrypt.compareSync(password, user.password)
        if(!matched){
            throw new Error(" Password not matched ");  
        }
    } catch (error:any) {

        console.log(error);
        console.log("failed to get the user")
        return NextResponse.json({
            message:error.message,
            success:false
        },
        {
            status:500
        })
    }
 }