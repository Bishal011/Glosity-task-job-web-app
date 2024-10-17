import express from "express";
import { dbConnection } from "./database/dbConnection.js";
import jobRouter from "./routes/jobRoutes.js";
import userRouter from "./routes/userRoutes.js";
import applicationRouter from "./routes/applicationRoutes.js";
import { config } from "dotenv";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.js";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";

const app = express();
config({ path: "./config/config.env" });

// CORS Configuration
app.use(
  cors({
    origin: [
      process.env.FRONTEND_URL, // Make sure this is correctly set
      "https://resonant-palmier-dcfcae.netlify.app",
    ],
    methods: ["GET", "POST", "DELETE", "PUT"], // Corrected from 'method' to 'methods'
    credentials: true, // Allows cookies to be sent
  })
);

// Middleware
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

// API Routes
app.use("/api/v1/user", userRouter);
app.use("/api/v1/job", jobRouter);
app.use("/api/v1/application", applicationRouter);

// Database Connection
dbConnection();

// Error Middleware
app.use(errorMiddleware);

// Start Server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
