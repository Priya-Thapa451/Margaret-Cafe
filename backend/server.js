import express from "express";
import userRouter from "./routes/userRoutes.js";
import dotenv from "dotenv";
import cors from "cors";
import adminRouter from "./routes/adminRoutes.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
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

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
