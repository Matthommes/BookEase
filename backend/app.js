import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import passport from "passport";
import cron from "node-cron";
import axios from "axios";
import { connectPrisma } from "./config/prisma.js";
import authRoute from "./routes/auth.Route.js";

// Load environment variables
dotenv.config();

const app = express();


// Middleware: Initialize Passport and session handling
app.use(passport.initialize());


// Middleware: Parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware: CORS configuration
app.use(
  cors({
    origin: ["https://booksmartly.vercel.app", "http://localhost:3000"],
    credentials: true, 
  })
);

// Middleware: Cookie parser
app.use(cookieParser());

// Connect to Prisma
connectPrisma();


// Cron job: Ping server every 5 minutes to prevent sleeping
const serverUrl =
  "https://booksmartly.onrender.com/api/auth/ping"; // Use env variable
cron.schedule("*/5 * * * *", async () => {
  try {
    const response = await axios.get(serverUrl);
    console.log(`Server pinged successfully: ${response.status}`);
  } catch (error) {
    console.error("Error pinging server:", error.message);
  }
});

// Routes: Authentication
app.use("/api/auth", authRoute);

export default app;
