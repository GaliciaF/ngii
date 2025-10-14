import React, { useState } from "react";
import AdminLayout from "../layout/AdminLayout";

const visitors = [
  { id: 1, name: "Carlos Perez", tenant: "Anna Reyes", date: "Oct 14, 2025", purpose: "Deliver item" },
  { id: 2, name: "Jane Dela Cruz", tenant: "John Cruz", date: "Oct 13, 2025", purpose: "Visit" },
];

export default function VisitorManagement() {
  const [search, setSearch] = useState("");

  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Visitor Management</h1>
        <button className="bg-black text-white px-4 py-2 rounded-md">+ Add Visitor</button>
      </div>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search visitor..."
        className="border p-2 rounded-md w-1/3 mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Table */}
      <div className="bg-white rounded-lg border shadow-sm">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Tenant Visited</th>
              <th className="py-3 px-4">Date</th>
              <th className="py-3 px-4">Purpose</th>
            </tr>
          </thead>
          <tbody>
            {visitors
              .filter((v) => v.name.toLowerCase().includes(search.toLowerCase()))
              .map((v) => (
                <tr key={v.id} className="border-t hover:bg-gray-50">
                  <td className="py-2 px-4">{v.name}</td>
                  <td className="py-2 px-4">{v.tenant}</td>
                  <td className="py-2 px-4">{v.date}</td>
                  <td className="py-2 px-4">{v.purpose}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}
