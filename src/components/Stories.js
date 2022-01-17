import React from "react";
import { Card, Image } from "react-bootstrap";

const Stories = () => {
  return (
    <Card style={{ width: "39rem" }} className="mt-5">
      <Card.Body>
        <ul className="d-flex justify-content-evenly p-0 mb-0">
          <li>
            <Image
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              className="rounded-circle"
            />
            <p className="mb-0">Esther</p>
          </li>
          <li>
            <Image
              src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              className="rounded-circle"
            />
            <p className="mb-0">Esther</p>
          </li>
          <li>
            <Image
              src="https://images.unsplash.com/photo-1611432579699-484f7990b127?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              className="rounded-circle"
            />
            <p className="mb-0">Alake</p>
          </li>

          <li>
            <Image
              src="https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80"
              className="rounded-circle"
            />
            <p className="mb-0">Doyin</p>
          </li>
          <li>
            <Image
              src="https://images.unsplash.com/photo-1573496358961-3c82861ab8f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
              className="rounded-circle"
            />
            <p className="mb-0">Naimah</p>
          </li>
          <li>
            <Image
              src="https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
              className="rounded-circle"
            />
            <p className="mb-0">Fatima</p>
          </li>
        </ul>
      </Card.Body>
    </Card>
  );
};

export default Stories;
