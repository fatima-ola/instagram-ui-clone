import React from "react";
import UserInfo from "./UserInfo";
import Suggestions from "./Suggestions";

const SectionRight = () => {
  return (
    <div className="right-info">
      <UserInfo />
      <Suggestions />
    </div>
  );
};

export default SectionRight;
