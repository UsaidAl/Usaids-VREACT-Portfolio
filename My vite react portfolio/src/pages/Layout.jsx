import React from "react";
import Header from "../components/Header"; // Import header component
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom" 
import "../CSS/Layout.css";

function Layout() {
  return (
    <div className="layout">
      <Header /> {/* Header component used here */}
      <main>
        <Outlet /> {/* Page content will be rendered here */}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;