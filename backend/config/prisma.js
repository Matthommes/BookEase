import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export const connectPrisma = async () => {
  try {
    await prisma.$connect();
    console.log("Connection to Database successful.");
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
