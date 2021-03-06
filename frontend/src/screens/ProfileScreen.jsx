import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import UserProfile from "../components/UserProfile";

const ProfileScreen = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="pushDown">
        <UserProfile />
      </div>
    </>
  );
};

export default ProfileScreen;
