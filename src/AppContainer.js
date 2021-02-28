import React from "react";
import { connect } from "react-redux";
import Darkly from "./pages/Darkly";
import Lux from "./pages/Lux";
import "./AppContainer.css";

class App extends React.Component {
  render() {
    if (this.props.theme === "darkly") {
      return <Darkly />;
    } else if (this.props.theme === "lux") {
      return <Lux />;
    } else {
      return <div>Error</div>;
    }
  }
}

const mapState = (state) => ({
  theme: state.theme,
});

const mapDispatch = (dispatch) => ({
  setTheme: (theme) => dispatch.theme.setTheme(theme),
});

const AppContainer = connect(mapState, mapDispatch)(App);

export default AppContainer;
