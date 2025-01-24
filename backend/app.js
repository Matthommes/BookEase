import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import passport from "passport";
import cron from "node-cron";
import axios from "axios";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

import { connectPrisma } from "./config/prisma.js";
import authRoute from "./routes/auth.Route.js";
import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";
import { frontendUrl, serverUrl } from "./utils/urls.js";

dotenv.config();

const app = express();

// Initialize middleware
app.use(passport.initialize());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(helmet());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
});
app.use(limiter);

app.use(
  cors({
    origin: frontendUrl,
    credentials: true,
  })
);

// Connect to Prisma
connectPrisma();

// Authentication routes
app.use("/api/auth", authRoute);

// Cron job: Ping server every 5 minutes to prevent sleeping
const server = serverUrl + "/api/auth/ping";
cron.schedule("*/5 * * * *", async () => {
  try {
    const response = await axios.get(server);
    console.log(`Server pinged successfully: ${response.status}`);
  } catch (error) {
    console.error("Error pinging server:", error.message);
  }
});

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

export default app;
