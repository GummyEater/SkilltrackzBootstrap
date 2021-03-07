import React from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import "./ThemesPage.scss";

class Themes extends React.Component {
  render() {
    return (
      <div>
        <span>
          <h1>Current Theme:</h1>
          <h3>{this.props.current}</h3>
        </span>
        <Button onClick={() => this.props.changeCurrentTheme("lux", "dark")}>
          Change to Lux
        </Button>
      </div>
    );
  }
}

const mapState = (state) => ({
  current: state.theme.current,
  currentMode: state.theme.currentMode,
});

const mapDispatch = (dispatch) => ({
  changeCurrentTheme: (newTheme, newMode) =>
    dispatch.theme.changeCurrentTheme([newTheme, newMode]),
});

const ThemesPage = connect(mapState, mapDispatch)(Themes);

export default ThemesPage;
