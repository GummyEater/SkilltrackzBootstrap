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
