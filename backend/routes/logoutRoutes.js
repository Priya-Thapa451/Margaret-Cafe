import express from "express";
import { logout } from "../controller/logoutController.js";
import { verifyToken } from "../middleware/jwtVerify.js"; // Assuming you have this middleware

const logoutRouter = express.Router();

// Route to handle logout with token verification
logoutRouter.post("/logout", verifyToken, logout);

export default logoutRouter;
