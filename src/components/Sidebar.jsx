import React from "react";
import { NavLink } from "react-router-dom";
import { Home, BedDouble, Users, Megaphone, Calendar, User } from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: <Home size={18} />, path: "/dashboard" },
  { name: "Room Management", icon: <BedDouble size={18} />, path: "/roommanagement" },
  { name: "Tenants", icon: <Users size={18} />, path: "/tenants" },
  { name: "Announcements", icon: <Megaphone size={18} />, path: "/announcements" },
  { name: "Cleaning Schedule", icon: <Calendar size={18} />, path: "/cleaningschedule" },
  { name: "Visitor Management", icon: <User size={18} />, path: "/visitormanagement" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-screen fixed left-0 top-0 p-5">
      <h2 className="text-lg font-semibold mb-6">🏠 BoardingHouse Pro</h2>
      <ul className="space-y-2">
        {menuItems.map((item) => (
          <li key={item.name}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 ${
                  isActive ? "bg-gray-200 font-medium" : ""
                }`
              }
            >
              {item.icon}
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}
