import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      setError("Please fill out all fields");
      return;
    }
    setError("");
    navigate("/dashboard");
  };

  return (
    <div className="flex min-h-screen bg-background">
      <div className="hidden md:flex w-1/2 bg-lincoln items-center justify-center">
        <h1 className="text-white text-4xl font-bold text-center px-8 leading-tight">
          Boarding House <br /> Management System
        </h1>
      </div>
      <div className="flex w-full md:w-1/2 items-center justify-center p-8">
        <div className="bg-background shadow-card rounded-2xl p-10 w-full max-w-md border border-smoky20">
          <h2 className="text-2xl font-semibold text-smoky text-center mb-6">Login to Your Account</h2>
          {error && (
            <div className="bg-lime20/30 text-smoky text-sm p-2 rounded mb-3 text-center">{error}</div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-smoky text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full border border-smoky20 rounded-lg px-4 py-2 focus:ring-2 focus:ring-avocado focus:outline-none bg-background text-smoky"
              />
            </div>
            <div>
              <label className="block text-smoky text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full border border-smoky20 rounded-lg px-4 py-2 focus:ring-2 focus:ring-avocado focus:outline-none bg-background text-smoky"
              />
            </div>
            <button type="submit" className="w-full bg-lincoln text-background py-2 rounded-lg hover:bg-avocado transition">
              Login
            </button>
            <p className="text-center text-sm text-smoky/70 mt-3">
              Don’t have an account? <Link to="/register" className="text-lincoln hover:underline">Register here</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
