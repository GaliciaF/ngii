import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const visitors = [
  { id: 1, name: "Carlos Perez", tenant: "Anna Reyes", date: "Oct 14, 2025", purpose: "Deliver item" },
  { id: 2, name: "Jane Dela Cruz", tenant: "John Cruz", date: "Oct 13, 2025", purpose: "Visit" },
];

export default function VisitorManagement() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">Visitor Management</h1>
          <button
            className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded-lg shadow-md transition"
            onClick={() => navigate("/addvisitor")}
          >
            + Add Visitor
          </button>
        </div>

        <input
          type="text"
          placeholder="Search visitor..."
          className="border p-3 rounded-lg w-full md:w-1/3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="bg-white rounded-2xl shadow-lg border overflow-x-auto">
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
      </div>
    </>
  );
}
