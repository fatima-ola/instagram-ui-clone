import React from "react";
import { Image } from "react-bootstrap";

const SuggestedUsers = () => {
  return (
    <div className="d-flex justify-content-between mt-2">
      <div className="d-flex justify-content-between">
        <Image
          style={{ width: "35px", height: "35px" }}
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          className="rounded-circle"
        />
        <h6 className="ms-2 mt-1">tess61</h6>
      </div>
      <p className="text-info mb-0">Segui</p>
    </div>
  );
};

export default SuggestedUsers;
