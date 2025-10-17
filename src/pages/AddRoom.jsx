import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddRoom() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ number: "", type: "", price: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Room added successfully!");
    navigate("/roommanagement");
  };

  return (
    <>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Add New Room</h1>
        <form 
          onSubmit={handleSubmit} 
          className="bg-white p-8 rounded-2xl shadow-lg space-y-6"
        >
          <div className="space-y-1">
            <label className="block text-gray-700 font-medium">Room Number</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={form.number}
              onChange={(e) => setForm({ ...form, number: e.target.value })}
              required
            />
          </div>

          <div className="space-y-1">
            <label className="block text-gray-700 font-medium">Type</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={form.type}
              onChange={(e) => setForm({ ...form, type: e.target.value })}
              required
            />
          </div>

          <div className="space-y-1">
            <label className="block text-gray-700 font-medium">Price per Month</label>
            <input
              type="number"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={form.price}
              onChange={(e) => setForm({ ...form, price: e.target.value })}
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
              onClick={() => navigate("/roommanagement")} 
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
