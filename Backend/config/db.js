import mongoose from "mongoose"

export const connectDB = async() =>{

    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Mongo DB Connected ${conn.connection.host}`);

    } 
    catch(error){
        console.log(`ERROR : ${error.message}`);
        process.exit(1); // 1 code mean failure 0 mean success

    }
};