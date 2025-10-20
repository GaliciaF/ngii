import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddVisitor() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    contact: "",
    date: "",
    purpose: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Visitor added successfully!");
    navigate("/visitormanagement");
  };

  return (
    <div className="p-6 flex flex-col items-center">
      <div className="bg-lincoln20 p-6 rounded-2xl shadow-card w-full max-w-lg">
        <h2 className="text-xl font-semibold text-lincoln mb-4">Add Visitor</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Visitor Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 border border-lincoln30 rounded-xl focus:outline-none focus:ring-2 focus:ring-avocado"
            required
          />
          <input
            type="text"
            name="contact"
            placeholder="Contact Number"
            value={form.contact}
            onChange={handleChange}
            className="w-full p-3 border border-lincoln30 rounded-xl focus:outline-none focus:ring-2 focus:ring-avocado"
            required
          />
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="w-full p-3 border border-lincoln30 rounded-xl focus:outline-none focus:ring-2 focus:ring-avocado"
            required
          />
          <textarea
            name="purpose"
            placeholder="Purpose of Visit"
            value={form.purpose}
            onChange={handleChange}
            className="w-full p-3 border border-lincoln30 rounded-xl focus:outline-none focus:ring-2 focus:ring-avocado"
            rows="3"
            required
          />

          <div className="flex justify-between mt-4">
            <button
              type="button"
              onClick={() => navigate("/visitors")}
              className="px-4 py-2 bg-smoky20 text-lincoln rounded-xl hover:bg-lincoln30 transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-lincoln text-white rounded-xl hover:bg-avocado transition-all"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
