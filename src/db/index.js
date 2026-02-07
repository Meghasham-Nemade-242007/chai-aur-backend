import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";

const connectDB = async() =>{
    try {
       const connInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
       console.log(`\n MongoDB connected !! DB HOST: ${connInstance.connection.host}`);
    } catch (error) {
        console.log("MongoDB connection failed!!!",error)
        throw error;
    }
}

export default connectDB;