import React from "react";

export default function Navbar() {
  return (
    <header className="w-full bg-white shadow-sm px-6 py-3 flex justify-between items-center sticky top-0 z-10">
      <h3 className="text-lg font-semibold">Dashboard</h3>
      <div className="flex items-center gap-3">
        <span className="text-gray-600">Kini Iopen ▼</span>
      </div>
    </header>
  );
}
