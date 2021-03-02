import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import "./Darkly.scss";

class Darkly extends React.Component {
  render() {
    return (
      <div>
        <link
          rel="stylesheet"
          id="style"
          href="//cdn.jsdelivr.net/npm/bootswatch@4.6.0/dist/darkly/bootstrap.min.css"
        ></link>
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

const DarklyContainer = connect(mapState, mapDispatch)(Darkly);

export default DarklyContainer;
