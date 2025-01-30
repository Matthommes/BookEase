import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

const db_url = process.env.DATABASE_URL
export const connectPrisma = async () => {
  try {
    await prisma.$connect();
    console.log("Connection to Database successful.");
    console.log(db_url)
  } catch (error) {
    console.error("Failed to connect to database.:", error);
  }
};

export const disconnectPrisma = async () => {
  try {
    await prisma.$disconnect();
  } catch (error) {
    console.error("Failed to disconnect from database:", error);
  }
};
