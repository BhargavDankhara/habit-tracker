import mongoose from "mongoose";
export default async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URL as string);
    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.log(error);
  }
}
