import React from "react";
import { Navbar, Container, Image } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className="border">
      <Container>
        <Navbar.Brand href="#home" className="text-dark">
          Boolgram
        </Navbar.Brand>
        <p className="cerca">Cerca</p>
        <div>
          <i className="far fa-heart"></i>
          <i class="fas fa-home"></i>
          <Image
            style={{ width: "27px", height: "27px" }}
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="rounded-circle ms-3"
          />
        </div>
      </Container>
    </Navbar>
  );
};

export default NavBar;
