import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function LoginPage() {
  // Validation function
  const Validation = (userInput) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    let errors = {};
    if (!userInput.email) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(userInput.email)) {
      errors.email = "Email is invalid";
    }
    if (!userInput.password) {
      errors.password = "Password is required";
    } else if (userInput.password.length < 6) {
      errors.password = "Password must be more than 6 characters";
    }
    return errors;
  };

  // State hooks
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
    role: "USER", // Default role
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Handle changes in form inputs
  const handleChange = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  const handleBlur = (e) => {
    setErrors({ ...errors, [e.target.name]: "" });
  };

  // Form validation and error handling
  function handleSubmit(e) {
    e.preventDefault();
    const errors = Validation(userInput);
    setErrors(errors);

    if (Object.keys(errors).length > 0) {
      toast.error("Error in form!");
    } else {
      toast.success("Validation Passed!");
    }

    return errors;
  }

  // Login function
  const login = async (e) => {
    e.preventDefault();
    const errors = handleSubmit(e);
    if (Object.keys(errors).length > 0) return;

    try {
      // Use the role from the state and determine the endpoint accordingly
      const endpoint =
        userInput.role === "STAFF"
          ? "http://localhost:3000/api/users/staff/login"
          : "http://localhost:3000/api/users/customer/login";

      // Sending the login request with email, password, and role
      const response = await axios.post(endpoint, userInput);

      toast.success("Logged in successfully");
      localStorage.setItem("token", response.data.token);

      // Redirect based on role
      if (userInput.role === "STAFF") {
        navigate("/staff/home");
      } else {
        navigate("/customer/home");
      }
    } catch (error) {
      console.error("Error Details:", error.response?.data); // Log full error details
      toast.error(error.response?.data?.error || "Login failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Login to Your Account
        </h2>
        <form className="space-y-4" onSubmit={login}>
          {/* Email Field */}
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 text-sm text-gray-600">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700"
              value={userInput.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          {/* Password Field */}
          <div className="flex flex-col">
            <label htmlFor="password" className="mb-2 text-sm text-gray-600">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700"
              value={userInput.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>

          {/* Role Selection (Optional) */}
          {/* If you need to provide a role selector, uncomment the following */}
          {/* <div className="flex flex-col">
            <label htmlFor="role" className="mb-2 text-sm text-gray-600">Role</label>
            <select
              name="role"
              value={userInput.role}
              onChange={handleChange}
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700"
            >
              <option value="CUSTOMER">Customer</option>
              <option value="STAFF">Staff</option>
            </select>
          </div> */}

          {/* Login Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 text-white rounded-lg bg-[#6E4523] hover:bg-[#5a3a1d]"
          >
            Login
          </button>
        </form>

        {/* Signup Link */}
        <p className="text-sm text-center text-gray-600">
          Don't have an account?{" "}
          <a href="/register" className="text-amber-950 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
