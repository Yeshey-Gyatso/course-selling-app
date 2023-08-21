 import { NextResponse } from "next/server";
 import { User } from "@/models";
 import bcrypt from 'bcryptjs';
 import jwt from  "jsonwebtoken";
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
        //3 jwt token generate

        const token=jwt.sign({
            _id:user._id,
            name:user.name
        },process.env.JWT_KEY )
        console.log(token);
        
        //4 sending token in cookie via nextResponse 
        const response=NextResponse.json({
            message:"logged in successfully",
            success:true
        })

        response.cookies.set(
            "authToken",
            token,
            {
                expiresIn:"1d",
                httpOnly:true
                }  
            
            );
        return response;
        

    } catch (error:any){

        console.log(error);
        console.log("failed to get the user")
        return NextResponse.json({
            message:error.message,
            success:false
        },
            {
            status:500
            }
        )
    }
 }