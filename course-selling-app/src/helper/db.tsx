import mongoose from "mongoose";
import { Course } from "@/models";

export const connectDb = async()=>{
    try {
const {connection} =await mongoose.connect('mongodb+srv://yesheygyatso:qwer@cluster0.gtye3uq.mongodb.net/course-selling-app',
 { dbName: "course-selling-app" });
       console.log(connection) 
       console.log("db connected .........")
    

   
    } catch (error) {
        
        console.log("failed to connect database");
        console.log(error);
    }
}