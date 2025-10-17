import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const sampleAnnouncements = [
  { id: 1, title: "Water Supply Interruption", date: "Oct 10, 2025", details: "Scheduled maintenance from 9 AM to 2 PM." },
  { id: 2, title: "Rent Collection Reminder", date: "Oct 5, 2025", details: "Please settle payments before the 10th." },
];

export default function Announcements() {
  const [announcements, setAnnouncements] = useState(sampleAnnouncements);
  const navigate = useNavigate();

  return (
    <>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">Announcements</h1>
          <button
            className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded-lg shadow-md transition"
            onClick={() => navigate("/newannouncement")}
          >
            + New Announcement
          </button>
        </div>

        <div className="grid gap-4">
          {announcements.map((a) => (
            <div key={a.id} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition border">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{a.title}</h3>
                <span className="text-gray-500 text-sm">{a.date}</span>
              </div>
              <p className="text-gray-600 mt-2">{a.details}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
