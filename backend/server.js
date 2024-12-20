import app from "./app.js";
import { disconnectPrisma } from "./config/prisma.js";

const PORT = process.env.PORT || 4000;

const gracefulShutdown = async () => {
  await disconnectPrisma();
  console.log("Shutting down gracefully.....");
  process.exit(0);
};

process.on("SIGINT", gracefulShutdown);
process.on("SIGTERM", gracefulShutdown);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
