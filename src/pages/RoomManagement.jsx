import React, { useState } from "react";
import AdminLayout from "../layout/AdminLayout";

const rooms = [
  { id: 1, number: "101", type: "Single", price: 800, status: "occupied" },
  { id: 2, number: "102", type: "Double", price: 1200, status: "available" },
  { id: 3, number: "201", type: "Single", price: 850, status: "maintenance" },
];

export default function RoomManagement() {
  const [search, setSearch] = useState("");

  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Room Management</h1>
        <button className="bg-black text-white px-4 py-2 rounded-md">+ Add Room</button>
      </div>

      {/* Filters */}
      <div className="flex gap-3 mb-5">
        <input
          type="text"
          placeholder="Search rooms or tenants..."
          className="border p-2 rounded-md w-1/3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select className="border p-2 rounded-md">
          <option>All Status</option>
          <option>Available</option>
          <option>Occupied</option>
          <option>Maintenance</option>
        </select>
        <select className="border p-2 rounded-md">
          <option>All Types</option>
          <option>Single</option>
          <option>Double</option>
          <option>Suite</option>
        </select>
      </div>

      {/* Rooms Grid */}
      <div className="grid grid-cols-3 gap-4">
        {rooms
          .filter((r) => r.number.includes(search))
          .map((room) => (
            <div key={room.id} className="bg-white border rounded-lg p-4">
              <div className="flex justify-between items-center mb-3">
                <p className="font-semibold">Room {room.number}</p>
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    room.status === "available"
                      ? "bg-green-100 text-green-600"
                      : room.status === "occupied"
                      ? "bg-gray-200 text-gray-700"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {room.status}
                </span>
              </div>
              <p className="text-sm text-gray-500">{room.type} Room</p>
              <p className="mt-2 font-semibold">${room.price}/month</p>
            </div>
          ))}
      </div>
    </AdminLayout>
  );
}
