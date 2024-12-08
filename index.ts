import express from "express";

import dotenv from "dotenv";
import connectDB from "./Db/connectDB";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import userRoute from "./routes/user.route";
import cors from "cors";
const app = express();
app.use(bodyParser.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(express.json());
app.use(cookieParser());
const corsOptions = {
  origin: "https://food-app-yt.onrender.com",
  credentials: true,
};
app.use(cors(corsOptions));

// api
app.use("/api/v1/user", userRoute);

connectDB();
app.listen(() => {
  console.log("first");
});
