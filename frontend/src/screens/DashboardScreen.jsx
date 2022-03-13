import React from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import TableAbout from "../components/TableAbout";


const Dashboard = ({ isOpen, toggle }) => {
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <TableAbout />
    </>
  );
};

export default Dashboard;
