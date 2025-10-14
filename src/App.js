import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import RoomManagement from "./pages/RoomManagement";
import Tenants from "./pages/Tenants";
import CleaningSchedule from "./pages/CleaningSchedule";
import VisitorManagement from "./pages/VisitorManagement";
import Announcements from "./pages/Announcements";
import AdminLayout from "./layout/AdminLayout";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* 🔹 Redirect to login when system starts */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* 🔹 Public pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* 🔹 Protected Admin pages with layout */}
        <Route
          path="/dashboard"
          element={
            <AdminLayout>
              <Dashboard />
            </AdminLayout>
          }
        />
        <Route
          path="/roommanagement"
          element={
            <AdminLayout>
              <RoomManagement />
            </AdminLayout>
          }
        />
        <Route
          path="/tenants"
          element={
            <AdminLayout>
              <Tenants />
            </AdminLayout>
          }
        />
        <Route
          path="/cleaningschedule"
          element={
            <AdminLayout>
              <CleaningSchedule />
            </AdminLayout>
          }
        />
        <Route
          path="/visitormanagement"
          element={
            <AdminLayout>
              <VisitorManagement />
            </AdminLayout>
          }
        />
        <Route
          path="/announcements"
          element={
            <AdminLayout>
              <Announcements />
            </AdminLayout>
          }
        />

        {/* 🔹 Fallback for invalid routes */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}
