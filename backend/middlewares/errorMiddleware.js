import logger from "../config/winston.js";

// Custom error class
export class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

// Handle Prisma-specific errors
const handlePrismaError = (err) => {
  if (err.code === "P2002") {
    return new AppError(
      "Duplicate field value. Please use a different value.",
      400
    );
  }
  if (err.code === "P2025") {
    return new AppError("Record not found.", 404);
  }
  return new AppError("Database error occurred.", 500);
};

// Handle JWT errors
const handleJWTError = () =>
  new AppError("Invalid token. Please log in again.", 401);

const handleJWTExpiredError = () =>
  new AppError("Your token has expired. Please log in again.", 401);

// Main error handler
export const errorHandler = (err, req, res, next) => {
  logger.error(err.message, { stack: err.stack });
  const statusCode = err.statusCode || 500;
  const status = err.status || "error";

  const response = {
    success: false,
    status,
    message: err.message || "Something went wrong!",
  };

  if (statusCode === 401) {
    response.tip = "Ensure you're logged in or your session hasn't expired.";
  } else if (statusCode === 403) {
    response.tip = "You don't have permission to access this resource.";
  } else if (statusCode === 404) {
    response.tip = `The resource at '${req.originalUrl}' was not found.`;
  } else if (statusCode === 500) {
    response.tip = "This seems to be an issue on our end. We're working on it!";
  }

  // Send response
  return res.status(statusCode).json(response);
};

// 404 Not Found Handler
export const notFound = (req, res, next) => {
  const error = new AppError(
    `Cannot find ${req.originalUrl} on this server!`,
    404
  );
  next(error);
};

// Async handler to reduce try-catch boilerplate
export const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);
