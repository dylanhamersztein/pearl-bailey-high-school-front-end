import * as React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

type Props = {};

export const NavBar = (props: Props) => {
  return (
    <Container>
      <Navbar bg="light" expand="large" expanded={true}>
        <Navbar.Brand>Pearl Bailey High School</Navbar.Brand>
        <Nav className="me-auto flex-row">
          <LinkContainer to="/students">
            <Nav.Link className="mx-3">Students</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/teachers">
            <Nav.Link className="mx-3">Teachers</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/courses">
            <Nav.Link className="mx-3">Courses</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar>
    </Container>
  );
};
