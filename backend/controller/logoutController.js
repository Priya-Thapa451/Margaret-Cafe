import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";

const prisma = new PrismaClient();
dotenv.config();

const logout = async (req, res) => {
  try {
    // Extract the JWT from cookies
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(400).json({ error: "No token provided" });
    }

    // Find the token in the Token model to validate it
    const tokenRecord = await prisma.token.findUnique({
      where: { token },
    });

    if (!tokenRecord) {
      return res.status(404).json({ error: "Token not found" });
    }

    // Delete the token from the Token model (logging out the user)
    await prisma.token.delete({
      where: { token: tokenRecord.token }, // Ensure you're deleting by the token
    });

    // Clear the JWT cookie in the user's browser
    res.clearCookie("jwt", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Ensure cookie security in production
      sameSite: "Strict", // Protect against CSRF attacks
    });

    return res
      .status(200)
      .json({ message: "Logged out successfully from Margaret Cafe" });
  } catch (error) {
    console.error("Logout error:", error);
    res.status(500).json({ error: "Server error while logging out" });
  }
};

export { logout };
