import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password || !form.confirmPassword) {
      setError("Please fill out all fields");
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setError("");
    alert("Account created successfully!");
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen bg-background">
      <div className="hidden md:flex w-1/2 bg-lincoln items-center justify-center">
        <h1 className="text-white text-4xl font-bold text-center px-8 leading-tight">
          Boarding House <br /> Management System
        </h1>
      </div>
      <div className="flex w-full md:w-1/2 items-center justify-center p-8">
        <div className="bg-lime20/20 shadow-card rounded-2xl p-10 w-full max-w-md border border-smoky20">
          <h2 className="text-2xl font-semibold text-smoky text-center mb-6">Create Your Account</h2>
          {error && (
            <div className="bg-lime20/30 text-smoky text-sm p-2 rounded mb-3 text-center">{error}</div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            {[
              { label: "Full Name", name: "name", type: "text", placeholder: "Enter your full name" },
              { label: "Email", name: "email", type: "email", placeholder: "Enter your email" },
              { label: "Password", name: "password", type: "password", placeholder: "Enter your password" },
              { label: "Confirm Password", name: "confirmPassword", type: "password", placeholder: "Confirm your password" },
            ].map((field) => (
              <div key={field.name}>
                <label className="block text-smoky text-sm font-medium mb-1">{field.label}</label>
                <input
                  type={field.type}
                  name={field.name}
                  value={form[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  className="w-full border border-smoky20 rounded-lg px-4 py-2 focus:ring-2 focus:ring-avocado focus:outline-none bg-background text-smoky"
                />
              </div>
            ))}
            <button type="submit" className="w-full bg-lincoln text-background py-2 rounded-lg hover:bg-avocado transition">Register</button>
            <p className="text-center text-sm text-smoky/70 mt-3">
              Already have an account? <Link to="/login" className="text-lincoln hover:underline">Login here</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
