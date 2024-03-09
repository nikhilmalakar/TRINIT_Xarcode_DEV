import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const dbConnect = () => {
  mongoose
    .connect(process.env.MONGODB_URI, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    })
    .then(() => console.log("Database connected"))
    .catch((error) => {
      console.log("Error connecting database");
      console.error(error.message);
      process.exit(1);
    });
}
export default dbConnect;
