import React, { useState } from "react";
import AdminLayout from "../layout/AdminLayout";

const sampleAnnouncements = [
  { id: 1, title: "Water Supply Interruption", date: "Oct 10, 2025", details: "Scheduled maintenance from 9 AM to 2 PM." },
  { id: 2, title: "Rent Collection Reminder", date: "Oct 5, 2025", details: "Please settle payments before the 10th." },
];

export default function Announcements() {
  const [announcements, setAnnouncements] = useState(sampleAnnouncements);

  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Announcements</h1>
        <button className="bg-black text-white px-4 py-2 rounded-md">+ New Announcement</button>
      </div>

      <div className="space-y-4">
        {announcements.map((a) => (
          <div key={a.id} className="bg-white p-5 border rounded-lg shadow-sm">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">{a.title}</h3>
              <span className="text-gray-500 text-sm">{a.date}</span>
            </div>
            <p className="text-gray-600 mt-2">{a.details}</p>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
}
