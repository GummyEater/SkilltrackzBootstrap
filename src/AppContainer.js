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
import TrackingPage from "./pages/TrackingPage";
import ThemesPage from "./pages/ThemesPage";

class ThemeProv extends React.Component {
  render() {
    if (this.props.current === "darkly") {
      return <Darkly />;
    } else if (this.props.current === "lux") {
      return <Lux />;
    } else {
      return <div>Error</div>;
    }
  }
}

class PrimaryApp extends React.Component {
  render() {
    return (
      <Router>
        <ThemeProv {...this.props} />
        <Navbar
          variant={this.props.currentMode}
          bg={this.props.currentMode}
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
                <Button href="/themes">
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
          <Route path="/themes" exact>
            <ThemesPage />
          </Route>
          <Route path="/tracking" exact>
            <TrackingPage />
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
  current: state.theme.current,
  currentMode: state.theme.currentMode,
});

const mapDispatch = (dispatch) => ({
  changeCurrentTheme: (newTheme, newMode) =>
    dispatch.theme.changeCurrentTheme([newTheme, newMode]),
});

const AppContainer = connect(mapState, mapDispatch)(PrimaryApp);

export default AppContainer;
