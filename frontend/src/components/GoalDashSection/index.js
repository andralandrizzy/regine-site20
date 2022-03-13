import React from "react";
import GoalForm from "../GoalForm";
import {
  DashSectionH1,
  DashSectionHeading,
  DashSectionP,
} from "./GoalDashElements";

const GoalDashSection = ({ user }) => {
  return (
    <>
        <DashSectionHeading>
            <DashSectionH1>Welcome {user && user.name}</DashSectionH1>
            <DashSectionP>Goals Dashboard</DashSectionP>
            <GoalForm />
        </DashSectionHeading>
        
    </>
  );
};

export default GoalDashSection;
