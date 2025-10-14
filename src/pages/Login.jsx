import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple mock validation (you can connect backend later)
    if (form.email === "" || form.password === "") {
      setError("Please fill out all fields");
      return;
    }

    // Clear errors and redirect
    setError("");
    navigate("/dashboard");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Left Section (image or color background) */}
      <div className="hidden md:flex w-1/2 bg-blue-700 items-center justify-center">
        <h1 className="text-white text-4xl font-bold text-center px-8 leading-tight">
          Boarding House <br /> Management System
        </h1>
      </div>

      {/* Right Section (form) */}
      <div className="flex w-full md:w-1/2 items-center justify-center p-8">
        <div className="bg-white shadow-lg rounded-2xl p-10 w-full max-w-md">
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
            Login to Your Account
          </h2>

          {error && (
            <div className="bg-red-100 text-red-700 text-sm p-2 rounded mb-3 text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800 transition"
            >
              Login
            </button>

            <p className="text-center text-sm text-gray-600 mt-3">
              Don’t have an account?{" "}
              <Link to="/register" className="text-blue-600 hover:underline">
                Register here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
