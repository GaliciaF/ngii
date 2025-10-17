import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import RoomManagement from "./pages/RoomManagement";
import Tenants from "./pages/Tenants";
import CleaningSchedule from "./pages/CleaningSchedule";
import VisitorManagement from "./pages/VisitorManagement";
import Announcements from "./pages/Announcements";
import AddTenant from "./pages/AddTenant";
import AddRoom from "./pages/AddRoom";
import AddVisitor from "./pages/AddVisitor";
import NewAnnouncement from "./pages/NewAnnouncement";
import AdminLayout from "./layout/AdminLayout";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<AdminLayout><Dashboard /></AdminLayout>} />
        <Route path="/roommanagement" element={<AdminLayout><RoomManagement /></AdminLayout>} />
        <Route path="/tenants" element={<AdminLayout><Tenants /></AdminLayout>} />
        <Route path="/cleaningschedule" element={<AdminLayout><CleaningSchedule /></AdminLayout>} />
        <Route path="/visitormanagement" element={<AdminLayout><VisitorManagement /></AdminLayout>} />
        <Route path="/announcements" element={<AdminLayout><Announcements /></AdminLayout>} />

        <Route path="/addtenant" element={<AdminLayout hideSidebar><AddTenant /></AdminLayout>} />
        <Route path="/addroom" element={<AdminLayout hideSidebar><AddRoom /></AdminLayout>} />
        <Route path="/addvisitor" element={<AdminLayout hideSidebar><AddVisitor /></AdminLayout>} />
        <Route path="/newannouncement" element={<AdminLayout hideSidebar><NewAnnouncement /></AdminLayout>} />

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}
