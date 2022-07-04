import express from "express";
const app = express();
import mongoose from "mongoose";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

// import routes
import userRoute from "../backend/routes/users.js";
import authRoute from "../backend/routes/auth.js";
import postRoute from "../backend/routes/posts.js";

dotenv.config();

mongoose.connect(process.env.MONGO_URL, () => {
  console.log("CONNECTED TO MONGO DB SERVER");
});

//M/ MIDDLEWARE
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

//M/ ROUTES
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

app.listen(5000, () => {
  console.log("SERVER IS RUNNING AT PORT 5000...");
});
