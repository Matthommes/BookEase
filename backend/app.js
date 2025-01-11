import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import { connectPrisma } from "./config/prisma.js";

import authRoute from "./routes/authRoute.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Connect prisma
connectPrisma();

import cron from "node-cron";
import axios from "axios";

// URL of your deployed server
const serverUrl = "https://booksmartly.onrender.com/ping";

// Cron job to ping the server every 5 minutes
cron.schedule("*/5 * * * *", async () => {
  try {
    const response = await axios.get(serverUrl);
    console.log(`Server pinged successfully: ${response.status}`);
  } catch (error) {
    console.error("Error pinging server:", error.message);
  }
});

//Routes

app.use("/api/auth", authRoute);

export default app;
