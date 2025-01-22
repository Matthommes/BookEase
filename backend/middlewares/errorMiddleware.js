import logger from "../config/winston.js";
export class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

// Handle Prisma Errors
const handlePrismaError = (err) => {
  if (err.code === "P2002") {
    return new AppError("This value already exists in our database.", 400);
  }
  if (err.code === "P2025") {
    return new AppError("Record not found.", 404);
  }
  return new AppError("Database error occurred.", 500);
};

// Handle JWT Errors
const handleJWTError = () =>
  new AppError("Invalid token. Please log in again.", 401);

const handleJWTExpiredError = () =>
  new AppError("Your token has expired. Please log in again.", 401);

// Main Error Handling Middleware
export const errorHandler = (err, req, res, next) => {
  logger.error(err.message, { stack: err.stack });
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  if (process.env.NODE_ENV === "development") {
    // Development Error Response
    return res.status(err.statusCode).json({
      status: err.status,
      error: err,
      message: err.message,
      stack: err.stack,
    });
  }

  // Production Error Response
  if (process.env.NODE_ENV === "production") {
    let error = { ...err };
    error.message = err.message;

    // Handle specific errors
    if (err.name === "JsonWebTokenError") error = handleJWTError();
    if (err.name === "TokenExpiredError") error = handleJWTExpiredError();
    if (err.name === "PrismaClientKnownRequestError")
      error = handlePrismaError(err);

    // Operational, trusted error: send message to client
    if (err.isOperational) {
      return res.status(error.statusCode).json({
        status: error.status,
        message: error.message,
      });
    }

    // Programming or other unknown error: don't leak error details
    console.error("ERROR 💥", err);
    return res.status(500).json({
      status: "error",
      message: "Something went wrong!",
    });
  }
};

// Not Found Handler
export const notFound = (req, res, next) => {
  const error = new AppError(
    `Can't find ${req.originalUrl} on this server!`,
    404
  );
  next(error);
};

// Async Handler (Removes try-catch boilerplate)
export const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);
