import React from "react";
import { connect } from "react-redux";
import "./HomeContainer.scss";

class Home extends React.Component {
  render() {
    return <div>hello</div>;
  }
}

const mapState = (state) => ({});

const mapDispatch = (dispatch) => ({});

const HomeContainer = connect(mapState, mapDispatch)(Home);

export default HomeContainer;
