import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const occupancyData = [
  { month: "Jan", value: 80 },
  { month: "Feb", value: 90 },
  { month: "Mar", value: 85 },
  { month: "Apr", value: 95 },
  { month: "May", value: 92 },
  { month: "Jun", value: 88 },
];

const roomTypes = [
  { name: "Single", value: 40, color: "#A78BFA" },
  { name: "Double", value: 35, color: "#38BDF8" },
  { name: "Triple", value: 20, color: "#FACC15" },
  { name: "Suite", value: 5, color: "#FB7185" },
];

export default function Dashboard() {
  return (
    <>
      <div className="space-y-8">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { title: "Total Rooms", value: "48", sub: "45 occupied, 3 available" },
            { title: "Active Tenants", value: "67", sub: "+3 from last month" },
            { title: "Monthly Revenue", value: "$14,200", sub: "+$400 from last month" },
            { title: "Pending Issues", value: "8", sub: "3 maintenance, 5 payments" },
          ].map((card) => (
            <div key={card.title} className="bg-white rounded-2xl shadow-lg p-6 border hover:shadow-xl transition">
              <h3 className="text-gray-500 text-sm">{card.title}</h3>
              <p className="text-2xl font-semibold mt-2">{card.value}</p>
              <p className="text-gray-400 text-sm mt-1">{card.sub}</p>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow-lg p-6 border">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Occupancy Trends</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={occupancyData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#38BDF8" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Room Type Distribution</h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie data={roomTypes} dataKey="value" nameKey="name" innerRadius={60} outerRadius={100}>
                  {roomTypes.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  );
}
