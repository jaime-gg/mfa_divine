import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import Success from './pages/Success'
import Checkout from "./pages/Checkout";

import Nav from './components/Nav';
import Footer from './components/Footer'

function App() {

  const [categories] = useState([
    {
      name: 'Sarah_Campbell_Blaffer_Foundation',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur adipiscing elit. Nunc ultricie. Nunc ultricie',
    },
    {
      name: 'Rienzi',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie.',
    },
    {
      name: 'Arts_of_Europe_and_the_Mediterranean',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie. Lorem ipsum dolor',
    }

  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <Router>
        <div className="row h-100 page-bg">
            <header className="side-menu">
              <Nav />
            </header>
            <div categories={categories} setCurrentCategory={setCurrentCategory} currentCategory={currentCategory} className=" main-page">
              <Switch>
              <Route exact path="/" component={Home} />
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
