import React from "react";
import { connect } from "react-redux";
import "./ThemesPage.scss";

class Themes extends React.Component {
  render() {
    return <div>themes</div>;
  }
}

const mapState = (state) => ({});

const mapDispatch = (dispatch) => ({});

const ThemesPage = connect(mapState, mapDispatch)(Themes);

export default ThemesPage;
