import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import Home from './pages/Home';
import Detail from './pages/Detail';
import NoMatch from './pages/NoMatch';
import Success from './pages/Success'
import Checkout from "./pages/Checkout";

import Nav from './components/Nav';
import Footer from './components/Footer'

function App() {
  return (
    <Router>
        <div className="row h-100 page-bg">
            <header className="side-menu">
              <Nav />
            </header>
            <div className=" main-page">
              <Switch>
              <Route exact path="/" component={Home} />
                <Route exact path="/art/:id" component={Detail} />
                <Route exact path="/checkout" component={Checkout} />
                <Route exact path="/success" component={Success} />
                <Route component={NoMatch} />
              </Switch>
            </div>
            <footer>
              <Footer />
            </footer>
        </div>
      </Router>
  );
}

export default App;
