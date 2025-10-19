import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddRoom() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ number: "", type: "Single", price: "", status: "Available" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Room added successfully!");
    navigate("/roommanagement");
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-smoky">Add Room</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-lime20/20 p-6 rounded-2xl shadow-card w-full max-w-md border border-smoky20"
      >
        <label className="block mb-3 text-smoky">
          Room Number
          <input
            type="text"
            value={form.number}
            onChange={(e) => setForm({ ...form, number: e.target.value })}
            className="border w-full p-2 rounded-md focus:ring-2 focus:ring-avocado mt-1"
            required
          />
        </label>
        <label className="block mb-3 text-smoky">
          Type
          <select
            value={form.type}
            onChange={(e) => setForm({ ...form, type: e.target.value })}
            className="border w-full p-2 rounded-md focus:ring-2 focus:ring-avocado mt-1"
          >
            <option>Single</option>
            <option>Double</option>
            <option>Suite</option>
          </select>
        </label>
        <label className="block mb-3 text-smoky">
          Price
          <input
            type="number"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
            className="border w-full p-2 rounded-md focus:ring-2 focus:ring-avocado mt-1"
            required
          />
        </label>
        <label className="block mb-3 text-smoky">
          Status
          <select
            value={form.status}
            onChange={(e) => setForm({ ...form, status: e.target.value })}
            className="border w-full p-2 rounded-md focus:ring-2 focus:ring-avocado mt-1"
          >
            <option>Available</option>
            <option>Occupied</option>
            <option>Maintenance</option>
          </select>
        </label>
        <div className="flex gap-3 mt-4">
          <button
            type="submit"
            className="bg-lincoln text-background px-4 py-2 rounded-md hover:bg-avocado transition"
          >
            Add Room
          </button>
          <button
            type="button"
            onClick={() => navigate("/roommanagement")}
            className="border px-4 py-2 rounded-md text-smoky hover:bg-avocado/20 transition"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
