// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';
import { BrowserRouter as Routes, Route, Switch } from 'react-router-dom';

// import Toolbar from './components/Toolbar/Toolbar';
// import Footer from "./components/Footer";

import Landing from "./pages/Landing.js";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";




class App extends Component {

  render() {

    return (

      <div>

        {/* <Toolbar /> */}

        <Routes>

          <Route exact path="/" component={Landing} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/projects" component={Projects} />

        </Routes>

        {/* <Footer /> */}




      </div>

    );
  }
}
export default App;
