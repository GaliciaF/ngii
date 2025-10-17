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
    <>
      <h1 className="text-2xl font-semibold mb-6">New Announcement</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-1/2">
        <label className="block mb-3">
          Title
          <input
            type="text"
            className="border w-full p-2 rounded-md"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            required
          />
        </label>
        <label className="block mb-3">
          Message
          <textarea
            className="border w-full p-2 rounded-md"
            rows="4"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
          ></textarea>
        </label>
        <div className="flex gap-3 mt-4">
          <button type="submit" className="bg-black text-white px-4 py-2 rounded-md">
            Post
          </button>
          <button type="button" onClick={() => navigate("/announcements")} className="border px-4 py-2 rounded-md">
            Cancel
          </button>
        </div>
      </form>
    </>
  );
}
