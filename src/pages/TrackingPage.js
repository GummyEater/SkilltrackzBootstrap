import React from "react";
import { connect } from "react-redux";
import "./TrackingPage.scss";

class Tracking extends React.Component {
  render() {
    return <div>tracking</div>;
  }
}

const mapState = (state) => ({});

const mapDispatch = (dispatch) => ({});

const TrackingPage = connect(mapState, mapDispatch)(Tracking);

export default TrackingPage;
