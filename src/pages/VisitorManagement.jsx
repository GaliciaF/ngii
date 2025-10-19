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
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-smoky">Visitor Management</h1>
        <button
          className="bg-lincoln20 border border-lincoln/20 px-5 py-2 rounded-2xl shadow-card hover:bg-lincoln30 transition-colors duration-200"
          onClick={() => navigate("/addvisitor")}
        >
          + Add Visitor
        </button>
      </div>

      <input
        type="text"
        placeholder="Search visitor..."
        className="border p-3 rounded-2xl w-full md:w-1/3 focus:ring-2 focus:ring-avocado focus:outline-none"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="bg-lincoln20 border border-lincoln/20 rounded-2xl shadow-card overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-lincoln30 text-background">
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
                <tr key={v.id} className="border-t hover:bg-lincoln30 transition-colors duration-200">
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
  );
}
