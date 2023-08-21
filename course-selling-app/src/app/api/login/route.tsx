 import { NextResponse } from "next/server";
 import { User } from "@/models";

 export async function POST(request:Request){
    const{email,passowrd}=await request.json();



   
    try {
        //1 checking the user
        const user=await User.findOne({
            email:email,
        });

        if (user==null){
            throw new Error("User not found ")
        }

        //2decrypt 
        
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