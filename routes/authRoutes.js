import express from "express";

const authRouter = express.Router();

authRouter.post("/auth-info", (req, res) => {
  return res.status(201).json({
    message: "user login successfully",
    success: true,
  });
});
export default authRouter;