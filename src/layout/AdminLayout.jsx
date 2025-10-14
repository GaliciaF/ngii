import React, { useState } from "react";
import Sidebar from "../components/Sidebar";

export default function AdminLayout({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />

      {/* Main content */}
      <main
        className={`flex-1 p-6 transition-all duration-300 ${
          isOpen ? "ml-64" : "ml-0"
        }`}
      >
        <div className="bg-white shadow-sm rounded-2xl p-6 min-h-[calc(100vh-3rem)]">
          {children}
        </div>
      </main>
    </div>
  );
}
