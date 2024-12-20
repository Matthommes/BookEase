import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";
dotenv.config();

import { connectPrisma } from './config/prisma.js';


import authRoute from "./routes/authRoute.js";


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors())


// Connect prisma
connectPrisma();

//Routes

app.use('/api/auth', authRoute);



export default app;