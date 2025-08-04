import React from "react";
import SidebarNav from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <div>
      <SidebarNav />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
