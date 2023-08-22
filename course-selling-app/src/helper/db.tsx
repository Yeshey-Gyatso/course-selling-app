import mongoose from "mongoose";
import { Course } from "@/models";

const config={
    isConnected:0,
}

export const connectDb = async()=>{

    if (config.isConnected){
        return;
    }

    try {
const {connection} =await mongoose.connect("mongodb+srv://yesheygyatso:qwer@cluster0.gtye3uq.mongodb.net/course-selling-app",
 { dbName: "course-selling-app" });
       console.log(connection) 
       console.log(connection.readyState);
       config.isConnected=connection.readyState
       console.log("db connected .........")
    

   
    } catch (error) {
        
        console.log("failed to connect database");
        console.log(error);
    }
}