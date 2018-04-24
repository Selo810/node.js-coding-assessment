import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import HomePage from './pages/Home';

class App extends Component {
  render() {
    return (
       <Router>
        <div style={{height: "100%"}}>
          <section id="app" className="">
             
              <Route exact path="/" component={HomePage}/>
          </section>
        </div>
        
      </Router>
    );
  }
}

export default App;
