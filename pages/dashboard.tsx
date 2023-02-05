import React from "react";
import Dashboard from "../components/Dashboard";
import Navbar from "../components/Dashboard/Navbar/Navbar";
import Sidebar from "../components/Dashboard/Sidebar/Sidebar";

export default function DashboardPage() {
  return (
    <div className="container mx-auto flex">
      <Sidebar />
      <div className="w-full">
        <Navbar />
        <Dashboard />
      </div>
    </div>
  );
}
