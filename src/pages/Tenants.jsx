import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const sampleTenants = [
  { id: 1, name: "Anna Reyes", room: "101", contact: "09123456789", status: "Active" },
  { id: 2, name: "John Cruz", room: "102", contact: "09987654321", status: "Pending" },
  { id: 3, name: "Maria Santos", room: "201", contact: "09778889999", status: "Inactive" },
];

export default function Tenants() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">Tenants</h1>
          <button
            onClick={() => navigate("/addtenant")}
            className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded-lg shadow-md transition"
          >
            + Add Tenant
          </button>
        </div>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search tenants..."
          className="border p-3 rounded-lg w-full md:w-1/3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Tenants Table */}
        <div className="bg-white rounded-2xl shadow-lg border overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="py-3 px-4">Name</th>
                <th className="py-3 px-4">Room</th>
                <th className="py-3 px-4">Contact</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {sampleTenants
                .filter((t) => t.name.toLowerCase().includes(search.toLowerCase()))
                .map((tenant) => (
                  <tr key={tenant.id} className="border-t hover:bg-gray-50">
                    <td className="py-2 px-4">{tenant.name}</td>
                    <td className="py-2 px-4">{tenant.room}</td>
                    <td className="py-2 px-4">{tenant.contact}</td>
                    <td className="py-2 px-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          tenant.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : tenant.status === "Pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-gray-200 text-gray-600"
                        }`}
                      >
                        {tenant.status}
                      </span>
                    </td>
                    <td className="py-2 px-4 text-center">
                      <button className="text-blue-500 hover:underline">Edit</button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
