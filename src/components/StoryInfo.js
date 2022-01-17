import React from "react";
import { Card, Image } from "react-bootstrap";

const StoryInfo = () => {
  return (
    <Card style={{ width: "39rem" }} className="mt-5 mb-5">
      <Card.Header className="bg-transparent">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <Image
              style={{ width: "42px", height: "42px" }}
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              className="rounded-circle"
            />
            <p className="card-text pt-2 ps-3">Miss Maye Pfeffer</p>
          </div>
          <i className="fas fa-ellipsis-h pt-2"></i>
        </div>
      </Card.Header>
      <Card.Img
        className="img-fluid"
        variant="top"
        src="https://images.unsplash.com/photo-1634283715079-d91bbed0ece0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
      />
      <Card.Body>
        <Card.Text>
          <i className="far fa-heart"></i>
          <i className="far fa-comment"></i>
        </Card.Text>
        <Card.Text className="d-flex mb-2">
          <Image
            style={{ width: "27px", height: "27px" }}
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="rounded-circle"
          />
          <p className="ms-2 mb-0">Piace a trudie345 e 4 altri</p>
        </Card.Text>
        <Card.Text>
          <p className="m-0">
            <span className="fw-bold">stark.jace</span> Queen of Hearts
          </p>
        </Card.Text>
        <Card.Text>
          <p className="m-0 text-secondary">Mostra tutti e 4 commentti</p>
          <p className="m-0">
            <span className="fw-bold">stark.jace</span> Queen of Hearts
          </p>
          <p className="m-0">
            <span className="fw-bold">stark.jace</span> Queen of Hearts
          </p>
          <p className="m-0">
            <span className="fw-bold">stark.jace</span> Lory, as
          </p>
          <p className="m-0">
            <span className="fw-bold">stark.jace</span> D, She.
          </p>
        </Card.Text>
        <Card.Text>
          <p className="text-secondary">45 Ore fa</p>
        </Card.Text>
      </Card.Body>
      <Card.Footer className="bg-transparent">
        <div className="d-flex justify-content-between">
          <p className="mb-0">Aggiugiun un Commentuo</p>
          <p className="text-info mb-0">Pubblica</p>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default StoryInfo;
