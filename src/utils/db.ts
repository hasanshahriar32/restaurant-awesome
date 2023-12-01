import mongoose, { ConnectOptions } from "mongoose";

const connect = async (): Promise<void> => {
  if (mongoose.connections[0].readyState) return;

  try {
    const mongooseOptions: ConnectOptions = {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    } as ConnectOptions;

    await mongoose.connect(process.env.MONGO_URL || "", mongooseOptions);
    console.log("Mongo Connection successfully established.");
  } catch (error) {
    throw new Error("Error connecting to Mongoose");
  }
};

export default connect;
