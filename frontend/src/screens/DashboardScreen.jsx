import React from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import TableContact from "../components/TableContact";
import TableAbout from "../components/TableAbout";


const Dashboard = ({ isOpen, toggle }) => {
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <TableContact/>
      <TableAbout />
    </>
  );
};

export default Dashboard;
