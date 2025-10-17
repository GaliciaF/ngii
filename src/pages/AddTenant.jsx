import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddTenant() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", room: "", contact: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Tenant added successfully!");
    navigate("/tenants");
  };

  return (
    <>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Add New Tenant</h1>
        <form 
          onSubmit={handleSubmit} 
          className="bg-white p-8 rounded-2xl shadow-lg space-y-6"
        >
          <div className="space-y-1">
            <label className="block text-gray-700 font-medium">Full Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
          </div>

          <div className="space-y-1">
            <label className="block text-gray-700 font-medium">Room</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={form.room}
              onChange={(e) => setForm({ ...form, room: e.target.value })}
              required
            />
          </div>

          <div className="space-y-1">
            <label className="block text-gray-700 font-medium">Contact</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={form.contact}
              onChange={(e) => setForm({ ...form, contact: e.target.value })}
              required
            />
          </div>

          <div className="flex gap-4 mt-4">
            <button 
              type="submit" 
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
            >
              Save
            </button>
            <button 
              type="button" 
              onClick={() => navigate("/tenants")} 
              className="flex-1 border border-gray-300 hover:bg-gray-100 text-gray-700 font-semibold py-3 rounded-lg transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
