import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import session from "express-session";
import passport from "passport";
import cron from "node-cron";
import axios from "axios";
import { connectPrisma, prisma } from "./config/prisma.js";
import authRoute from "./routes/auth.Route.js";

// Load environment variables
dotenv.config();

const app = express();

// Middleware: Session configuration
// app.use(
//   session({
//     secret: process.env.SESSION_SECRET || "default-secret", // Fallback for secret
//     resave: false,
//     saveUninitialized: false, // Avoid creating sessions for unauthenticated requests
//     cookie: {
//       secure: process.env.NODE_ENV === "production", // Enable secure cookies in production
//       httpOnly: true, // Protect cookies from client-side scripts
//       maxAge: 1000 * 60 * 60 * 24 * 7, // Set cookie expiration to 7 days
//     },
//   })
// );

// Middleware: Initialize Passport and session handling
app.use(passport.initialize());


// Middleware: Parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware: CORS configuration
app.use(
  cors({
    origin: ["https://booksmartly.vercel.app", "http://localhost:3000"], // Add allowed origins
    credentials: true, // Allow cookies with CORS
  })
);

// Middleware: Cookie parser
app.use(cookieParser());

// Connect to Prisma
connectPrisma();

// Passport: Serialize and deserialize user
// After your middleware setup:

// passport.serializeUser((user, done) => {
//   // Only serialize essential data
//   try {
//     const serializableUser = {
//       id: user.id,
//       email: user.email,
//       // Add other necessary fields
//     };
//     done(null, serializableUser);
//   } catch (error) {
//     done(error, null);
//   }
// });

// passport.deserializeUser(async (serializedUser, done) => {
//   try {
//     // Use the serialized data to fetch complete user
//     const user = await prisma.user.findUnique({ 
//       where: { id: serializedUser.id } 
//     });
    
//     if (!user) {
//       return done(new Error('User not found'), null);
//     }
    
//     done(null, user);
//   } catch (error) {
//     done(error, null);
//   }
// });
// Cron job: Ping server every 5 minutes to prevent sleeping
const serverUrl =
  process.env.SERVER_URL || "https://booksmartly.onrender.com/api/auth/ping"; // Use env variable
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
