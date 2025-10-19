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
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-smoky">Add Tenant</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-lime20/20 p-6 rounded-2xl shadow-card w-full max-w-md border border-smoky20"
      >
        <label className="block mb-3 text-smoky">
          Full Name
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="border w-full p-2 rounded-md focus:ring-2 focus:ring-avocado mt-1"
            required
          />
        </label>
        <label className="block mb-3 text-smoky">
          Room Number
          <input
            type="text"
            value={form.room}
            onChange={(e) => setForm({ ...form, room: e.target.value })}
            className="border w-full p-2 rounded-md focus:ring-2 focus:ring-avocado mt-1"
            required
          />
        </label>
        <label className="block mb-3 text-smoky">
          Contact Number
          <input
            type="text"
            value={form.contact}
            onChange={(e) => setForm({ ...form, contact: e.target.value })}
            className="border w-full p-2 rounded-md focus:ring-2 focus:ring-avocado mt-1"
            required
          />
        </label>
        <div className="flex gap-3 mt-4">
          <button
            type="submit"
            className="bg-lincoln text-background px-4 py-2 rounded-md hover:bg-avocado transition"
          >
            Add Tenant
          </button>
          <button
            type="button"
            onClick={() => navigate("/tenants")}
            className="border px-4 py-2 rounded-md text-smoky hover:bg-avocado/20 transition"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
