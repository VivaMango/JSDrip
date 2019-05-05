import React, { Component } from "react";
import { Container } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

// Components
import DripNav from "./components/DripNav";

// Pages
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import LogPage from "./pages/LogPage";
import PortfolioPage from "./pages/PortfolioPage";
import BlogPage from "./pages/BlogPage";

class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <DripNav />
          <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/log" component={LogPage} />
          <Route exact path="/portfolio" component={PortfolioPage} />
          <Route exact path="/blog" component={BlogPage} />
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;
