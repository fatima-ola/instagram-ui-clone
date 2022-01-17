import React from "react";
import { Image } from "react-bootstrap";

const UserInfo = () => {
  return (
    <div className="d-flex justify-content-between user-info mt-5">
      <Image
        style={{ width: "42px", height: "42px" }}
        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        className="rounded-circle"
      />
      <div>
        <h6>michelepapagni</h6>
        <p>Michele Papagni</p>
      </div>
      <div>
        <p className="text-info mb-0">Passa a</p>
      </div>
    </div>
  );
};

export default UserInfo;
