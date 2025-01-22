import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import passport from "passport";
import cron from "node-cron";
import axios from "axios";
import { connectPrisma } from "./config/prisma.js";
import authRoute from "./routes/auth.Route.js";
import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";
import { frontendUrl, serverUrl } from "./utils/urls.js";
import rateLimit from "express-rate-limit";
import helmet from "helmet";

dotenv.config();

const app = express();

// Middleware: Initialize Passport and session handling
app.use(passport.initialize());

// Middleware: Parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});

app.use(helmet());
app.use(limiter);

// Middleware: CORS configuration

const corsOption = {
  origin: frontendUrl,
  credentials: true,
};
app.use(cors(corsOption));

// Middleware: Cookie parser
app.use(cookieParser());

app.use(notFound);
app.use(errorHandler);

// Connect to Prisma
connectPrisma();

// Cron job: Ping server every 5 minutes to prevent sleeping
const server = serverUrl;

cron.schedule("*/5 * * * *", async () => {
  try {
    const response = await axios.get(server);
    console.log(`Server pinged successfully: ${response.status}`);
  } catch (error) {
    console.error("Error pinging server:", error.message);
  }
});

// Routes: Authentication
app.use("/api/auth", authRoute);

export default app;
