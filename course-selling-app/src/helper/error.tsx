import { HttpStatusCode } from "axios";
import { NextResponse } from "next/server";

export const getResponseMessage=(message:String,statusCode:HttpStatusCode,successStatus:Boolean)=>{
    return NextResponse.json({
        message:message,
        success:successStatus
    },
    {
        status:statusCode
    })
}