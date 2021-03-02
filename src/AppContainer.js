import React from "react";
import { connect } from "react-redux";
import Darkly from "./themes/Darkly";
import Lux from "./themes/Lux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  Button,
  Navbar,
  Nav,
  NavDropdown,
  ButtonToolbar,
  ButtonGroup,
} from "react-bootstrap";
import "./AppContainer.css";
import { Gear, Person, Palette, People } from "react-bootstrap-icons";
import HomeContainer from "./pages/HomeContainer";
import TrackingContainer from "./pages/TrackingContainer";

class ThemeProv extends React.Component {
  render() {
    if (this.props.currentTheme === "darkly") {
      return <Darkly />;
    } else if (this.props.currentTheme === "lux") {
      return <Lux />;
    } else {
      return <div>Error</div>;
    }
  }
}

class PrimaryApp extends React.Component {
  swapTheme = () => {
    if (this.props.currentTheme === this.props.primaryTheme) {
      this.props.setCurrentTheme(this.props.secondaryTheme);
      this.props.setCurrentThemeMode(this.props.secondaryThemeMode);
    } else {
      this.props.setCurrentTheme(this.props.primaryTheme);
      this.props.setCurrentThemeMode(this.props.primaryThemeMode);
    }
  };

  render() {
    return (
      <Router>
        <ThemeProv {...this.props} />
        <Navbar
          variant={this.props.currentThemeMode}
          bg={this.props.currentThemeMode}
          expand="lg"
        >
          <Navbar.Brand href="/">SkilltrackzV</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/tracking">Tracking</Nav.Link>
            </Nav>
            <ButtonToolbar aria-label="Toolbar with button groups">
              <ButtonGroup className="mr-2" aria-label="First group">
                <Button>
                  <Person />
                </Button>
                <Button>
                  <People />
                </Button>
                <Button onClick={this.swapTheme}>
                  <Palette />
                </Button>
                <Button>
                  <Gear />
                </Button>
              </ButtonGroup>
            </ButtonToolbar>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route path="/tracking" exact>
            <TrackingContainer />
          </Route>
          <Route path="/" exact>
            <HomeContainer />
          </Route>
        </Switch>
      </Router>
    );
  }
}

const mapState = (state) => ({
  primaryTheme: state.primaryTheme,
  primaryThemeMode: state.primaryThemeMode,
  secondaryTheme: state.secondaryTheme,
  secondaryThemeMode: state.secondaryThemeMode,
  currentTheme: state.currentTheme,
  currentThemeMode: state.currentThemeMode,
});

const mapDispatch = (dispatch) => ({
  setPrimaryTheme: (setPrimaryTheme) =>
    dispatch.theme.setPrimaryTheme(setPrimaryTheme),
  setPrimaryThemeMode: (setPrimaryThemeMode) =>
    dispatch.themeMode.setPrimaryThemeMode(setPrimaryThemeMode),
  setSecondaryTheme: (secondaryTheme) =>
    dispatch.secondaryTheme.setSecondaryTheme(secondaryTheme),
  setSecondaryThemeMode: (secondaryThemeMode) =>
    dispatch.secondaryThemeMode.setSecondaryThemeMode(secondaryThemeMode),
  setCurrentTheme: (currentTheme) =>
    dispatch.currentTheme.setCurrentTheme(currentTheme),
  setCurrentThemeMode: (currentThemeMode) =>
    dispatch.currentThemeMode.setCurrentThemeMode(currentThemeMode),
});

const AppContainer = connect(mapState, mapDispatch)(PrimaryApp);

export default AppContainer;
