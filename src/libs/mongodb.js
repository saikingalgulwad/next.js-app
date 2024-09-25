import mongoose from "mongoose";

const connectMongoDB = async() =>{
    try{

        await mongoose.connect("mongodb+srv://saiprasad:uZKwV12KLJaUNtyX@cluster0.gcvpc.mongodb.net/userid?retryWrites=true&w=majority&appName=Cluster0")
    }  
    catch(error){
        console.log(error)
    }
}
export default connectMongoDB;