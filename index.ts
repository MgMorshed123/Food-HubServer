import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./Db/connectDB";

const app = express();

connectDB();
app.listen(() => {
  console.log("first");
});
