import React, { useState } from "react";

const rooms = [
  { id: 1, number: "101", type: "Single", price: 800, status: "occupied" },
  { id: 2, number: "102", type: "Double", price: 1200, status: "available" },
  { id: 3, number: "201", type: "Single", price: 850, status: "maintenance" },
];

export default function RoomManagement() {
  const [search, setSearch] = useState("");

  return (
    <>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">Room Management</h1>
          <button
            onClick={() => (window.location.href = "/addroom")}
            className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded-lg shadow-md transition"
          >
            + Add Room
          </button>
        </div>

        {/* Search Filters */}
        <div className="flex flex-wrap gap-3 items-center">
          <input
            type="text"
            placeholder="Search rooms..."
            className="border p-3 rounded-lg w-full md:w-1/3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none">
            <option>All Status</option>
            <option>Available</option>
            <option>Occupied</option>
            <option>Maintenance</option>
          </select>
          <select className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none">
            <option>All Types</option>
            <option>Single</option>
            <option>Double</option>
            <option>Suite</option>
          </select>
        </div>

        {/* Room Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {rooms
            .filter((r) => r.number.includes(search))
            .map((room) => (
              <div key={room.id} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition border">
                <div className="flex justify-between items-center mb-3">
                  <p className="text-lg font-semibold">Room {room.number}</p>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      room.status === "available"
                        ? "bg-green-100 text-green-700"
                        : room.status === "occupied"
                        ? "bg-gray-200 text-gray-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {room.status}
                  </span>
                </div>
                <p className="text-gray-500">{room.type} Room</p>
                <p className="mt-3 font-semibold">${room.price}/month</p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
