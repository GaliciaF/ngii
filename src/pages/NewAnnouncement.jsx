import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewAnnouncement() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ title: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Announcement posted successfully!");
    navigate("/announcements");
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-smoky">New Announcement</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-lime20/20 p-6 rounded-2xl shadow-card w-full max-w-md border border-smoky20"
      >
        <label className="block mb-3 text-smoky">
          Title
          <input
            type="text"
            className="border w-full p-2 rounded-md focus:ring-2 focus:ring-avocado mt-1"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            required
          />
        </label>
        <label className="block mb-3 text-smoky">
          Message
          <textarea
            className="border w-full p-2 rounded-md focus:ring-2 focus:ring-avocado mt-1"
            rows="4"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
          ></textarea>
        </label>
        <div className="flex gap-3 mt-4">
          <button
            type="submit"
            className="bg-lincoln text-background px-4 py-2 rounded-md hover:bg-avocado transition"
          >
            Post
          </button>
          <button
            type="button"
            onClick={() => navigate("/announcements")}
            className="border px-4 py-2 rounded-md text-smoky hover:bg-avocado/20 transition"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
