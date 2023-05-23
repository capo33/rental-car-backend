import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { connectDB } from "./config/db";

// load env variables
dotenv.config();

// Initialize express
const app = express();

// Set up port
const port = process.env.PORT || 5000;

// Connect to database
connectDB();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.listen(port, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`);
});
