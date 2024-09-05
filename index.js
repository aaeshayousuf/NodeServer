import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
dotenv.config();
import authRouter from "./routes/authRoutes.js";
import userRouter from "./routes/userRoutes.js";

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

app.use("*", (req, res) => {
  res.status(404).json({
    message: "not found",
    success: false,
  });
});

app.listen(port, console.log(`server is running on port ${port}`));