import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Fetch user profile after login
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    axios
      .get("http://localhost:5000/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUser(response.data);
      })
      .catch((err) => {
        setError("Failed to fetch profile");
      });
  }, [navigate]);

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      {error && <div className="text-red-500">{error}</div>}
      {user ? (
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold text-gray-700">Profile</h1>
          <div className="flex flex-col items-start space-y-2">
            <div className="text-gray-600">
              <strong>Name:</strong> {user.username}
            </div>
            <div className="text-gray-600">
              <strong>Email:</strong> {user.email}
            </div>
            <div className="text-gray-600">
              <strong>Role:</strong> {user.role}
            </div>
          </div>
          <button
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={() => navigate("/")}
          >
            Go to Dashboard
          </button>
        </div>
      ) : (
        <div className="text-gray-500">Loading profile...</div>
      )}
    </div>
  );
}
