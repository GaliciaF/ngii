import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddVisitor() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", tenant: "", date: "", purpose: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Visitor added successfully!");
    navigate("/visitormanagement");
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-smoky">Add Visitor</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-lime20/20 p-6 rounded-2xl shadow-card w-full max-w-md border border-smoky20"
      >
        <label className="block mb-3 text-smoky">
          Visitor Name
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="border w-full p-2 rounded-md focus:ring-2 focus:ring-avocado mt-1"
            required
          />
        </label>
        <label className="block mb-3 text-smoky">
          Tenant Visited
          <input
            type="text"
            value={form.tenant}
            onChange={(e) => setForm({ ...form, tenant: e.target.value })}
            className="border w-full p-2 rounded-md focus:ring-2 focus:ring-avocado mt-1"
            required
          />
        </label>
        <label className="block mb-3 text-smoky">
          Date
          <input
            type="date"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            className="border w-full p-2 rounded-md focus:ring-2 focus:ring-avocado mt-1"
            required
          />
        </label>
        <label className="block mb-3 text-smoky">
          Purpose
          <input
            type="text"
            value={form.purpose}
            onChange={(e) => setForm({ ...form, purpose: e.target.value })}
            className="border w-full p-2 rounded-md focus:ring-2 focus:ring-avocado mt-1"
            required
          />
        </label>
        <div className="flex gap-3 mt-4">
          <button
            type="submit"
            className="bg-lincoln text-background px-4 py-2 rounded-md hover:bg-avocado transition"
          >
            Add Visitor
          </button>
          <button
            type="button"
            onClick={() => navigate("/visitormanagement")}
            className="border px-4 py-2 rounded-md text-smoky hover:bg-avocado/20 transition"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
