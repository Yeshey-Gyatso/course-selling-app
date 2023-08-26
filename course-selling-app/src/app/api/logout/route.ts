import { NextResponse } from "next/server";

import { connectDb } from "@/helper/db";
connectDb();

export async function POST(request:Request){
    const response=NextResponse.json({
        message:"Logged Out",
        success:true
        })

        response.cookies.set("authToken","",{
            expires:new Date(0),
        })
        return response;
  
}