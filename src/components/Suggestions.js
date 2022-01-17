import React from "react";
import SuggestedUser from "./SuggestedUsers";

const Suggestions = () => {
  return (
    <>
      <div className="d-flex justify-content-between user-info mt-5">
        <h6 className="text-secondary">Suggestions For You</h6>
        <p className="fw-bold mb-0">See All</p>
      </div>
      <SuggestedUser />
      <SuggestedUser />
      <SuggestedUser />
      <SuggestedUser />
      <SuggestedUser />
      <SuggestedUser />
      <p className="text-secondary mt-5">&copy; 2022 INSTAGRAM FROM FACEBOOK</p>
    </>
  );
};

export default Suggestions;
