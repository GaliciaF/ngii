import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const announcements = [
  { id: 1, title: "Water Outage", message: "Water will be off on Oct 21 from 8am-12pm" },
  { id: 2, title: "Maintenance Schedule", message: "Room 101 and 102 will be cleaned on Oct 22" },
];

  

export default function Announcements() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-smoky">Announcements</h1>
        <button
          onClick={() => navigate("/newannouncement")}
          className="bg-lincoln20 border border-lincoln/20 px-5 py-2 rounded-2xl shadow-card hover:bg-lincoln30 transition-colors duration-200"
        >
          + New Announcement
        </button>
      </div>

      <input
        type="text"
        placeholder="Search announcements..."
        className="border p-3 rounded-2xl w-full md:w-1/3 focus:ring-2 focus:ring-avocado focus:outline-none"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="space-y-4 mt-4">
        {announcements
          .filter((a) => a.title.toLowerCase().includes(search.toLowerCase()))
          .map((a) => (
            <div
              key={a.id}
              className="bg-lincoln20 border border-lincoln/20 rounded-2xl shadow-card p-6 hover:bg-lincoln30 transition-colors duration-200"
            >
              <h3 className="text-lg font-semibold text-smoky">{a.title}</h3>
              <p className="text-smoky/90 mt-2">{a.message}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
