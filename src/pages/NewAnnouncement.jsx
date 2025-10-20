import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewAnnouncement() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    message: "",
    date: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Announcement posted successfully!");
    navigate("/announcements");
  };

  return (
    <div className="p-6 flex flex-col items-center">
      <div className="bg-lincoln20 p-6 rounded-2xl shadow-card w-full max-w-lg">
        <h2 className="text-xl font-semibold text-lincoln mb-4">
          New Announcement
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            placeholder="Announcement Title"
            value={form.title}
            onChange={handleChange}
            className="w-full p-3 border border-lincoln30 rounded-xl focus:outline-none focus:ring-2 focus:ring-avocado"
            required
          />

          <textarea
            name="message"
            placeholder="Announcement Message"
            value={form.message}
            onChange={handleChange}
            rows="4"
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

          <div className="flex justify-between mt-4">
            <button
              type="button"
              onClick={() => navigate("/announcements")}
              className="px-4 py-2 bg-smoky20 text-lincoln rounded-xl hover:bg-lincoln30 transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-lincoln text-white rounded-xl hover:bg-avocado transition-all"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
