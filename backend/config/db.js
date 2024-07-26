import mongoose from "mongoose";

export const connectDB = async ()=> {
    await mongoose.connect('mongodb+srv://ayushjoshi050:fTLHIpKipzbtOBAK@cluster0.bekae3a.mongodb.net/canteen').then(()=>{
        console.log("DB Connected")
    })  
}