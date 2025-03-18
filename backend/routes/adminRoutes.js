import express from "express";
import { adminLogin } from "../controller/authController.js";
import { authenticateAdmin } from "../middleware/authMiddleware.js";
import {
  createMenuItem,
  deleteMenuItem,
  updateMenuItem,
} from "../controller/menuController.js";

const adminRouter = express.Router();

adminRouter.post("/login", adminLogin);
adminRouter.post("/menu", authenticateAdmin, createMenuItem);
adminRouter.put("/menu/:id", authenticateAdmin, updateMenuItem);
adminRouter.delete("/menu/:id", authenticateAdmin, deleteMenuItem);

export default adminRouter;
