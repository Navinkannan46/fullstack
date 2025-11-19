import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDb connencted successfuly");
  } catch (error) {
    console.error("Mongo Error", error);
  }
};

export default connectDb;
