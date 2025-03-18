import express from "express";
import userRouter from "./routes/userRoutes.js";
import dotenv from "dotenv";
import cors from "cors";
import bcrypt from "bcrypt";
import adminRouter from "./routes/adminRoutes.js";
import cookieParser from "cookie-parser";
import { PrismaClient } from "@prisma/client";

dotenv.config();

const app = express();
const prisma = new PrismaClient();
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.get("/", (req, res) => {
  res.send("Margaret Cafe!");
});

app.use("/api/users", userRouter);
app.use("/api/admin", adminRouter);

const createDefaultAdmin = async () => {
  try {
    const adminExists = await prisma.admin.findUnique({
      where: { email: "admin@example.com" }, // ✅ Use email (unique field)
    });

    if (!adminExists) {
      const hashedPassword = await bcrypt.hash("admin123", 10);
      await prisma.admin.create({
        data: {
          email: "admin@example.com",
          name: "Admin", // You can still set a name, but it’s not unique
          password: hashedPassword,
        },
      });
      console.log("Default admin created: admin@example.com / admin123");
    } else {
      console.log("ℹ Default admin already exists.");
    }
  } catch (error) {
    console.error("Error creating default admin:", error);
  }
};

// Call the function on server startup
createDefaultAdmin();

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
