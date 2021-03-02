import React from "react";
import { connect } from "react-redux";
import "./HomeContainer.scss";

class Tracking extends React.Component {
  render() {
    return <div>tracking</div>;
  }
}

const mapState = (state) => ({});

const mapDispatch = (dispatch) => ({});

const TrackingContainer = connect(mapState, mapDispatch)(Tracking);

export default TrackingContainer;
