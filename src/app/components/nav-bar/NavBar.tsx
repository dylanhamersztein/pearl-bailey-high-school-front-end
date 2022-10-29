// @flow
import * as React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";

type Props = {};

export const NavBar = (props: Props) => {
    return (
        <Navbar bg="light" expand="large" expanded={true}>
            <Container>
                <Navbar.Brand>Pearl Bailey High School</Navbar.Brand>
                <Nav className="me-auto flex-row">
                    <Nav.Link className="mx-3" href="/students">Students</Nav.Link>
                    <Nav.Link className="mx-3" href="/teachers">Teachers</Nav.Link>
                    <Nav.Link className="mx-3" href="/courses">Courses</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};