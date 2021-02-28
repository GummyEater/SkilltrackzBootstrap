import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import "./Lux.scss";

class Lux extends React.Component {
  render() {
    return (
      <div>
        <link
          rel="stylesheet"
          id="style"
          href="//cdn.jsdelivr.net/npm/bootswatch@4.6.0/dist/lux/bootstrap.min.css"
        ></link>
        <Navbar variant={"dark"} bg={"dark"} expand="lg">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Button
              variant="primary"
              onClick={() => this.props.setTheme("darkly")}
            >
              Go Dark
            </Button>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapState = (state) => ({
  theme: state.theme,
});

const mapDispatch = (dispatch) => ({
  setTheme: (theme) => dispatch.theme.setTheme(theme),
});

const LuxContainer = connect(mapState, mapDispatch)(Lux);

export default LuxContainer;
