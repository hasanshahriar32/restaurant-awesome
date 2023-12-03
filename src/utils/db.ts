import mongoose, { ConnectOptions } from "mongoose";

const connect = async () => {
  if (mongoose.connections[0].readyState) return;

  try {
    const mongooseOptions: ConnectOptions = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions;

    await mongoose.connect(process.env.MONGO_URI || "", mongooseOptions);
    console.log("Database connected");
  } catch (error: any) {
    console.log(error.message, "Database connection failed");
    process.exit(1);
  }
};

export default connect;
