import React, { useState } from "react";
import AdminLayout from "../layout/AdminLayout";

const sampleTenants = [
  { id: 1, name: "Anna Reyes", room: "101", contact: "09123456789", status: "Active" },
  { id: 2, name: "John Cruz", room: "102", contact: "09987654321", status: "Pending" },
  { id: 3, name: "Maria Santos", room: "201", contact: "09778889999", status: "Inactive" },
];

export default function Tenants() {
  const [search, setSearch] = useState("");

  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Tenants</h1>
        <button className="bg-black text-white px-4 py-2 rounded-md">+ Add Tenant</button>
      </div>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search tenants..."
        className="border p-2 rounded-md w-1/3 mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Tenants Table */}
      <div className="bg-white rounded-lg border shadow-sm">
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
                      className={`px-2 py-1 rounded-full text-xs ${
                        tenant.status === "Active"
                          ? "bg-green-100 text-green-600"
                          : tenant.status === "Pending"
                          ? "bg-yellow-100 text-yellow-600"
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
    </AdminLayout>
  );
}
