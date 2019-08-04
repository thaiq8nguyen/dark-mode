import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import "bulma";

import "./styles.scss";
import Navbar from "./components/Navbar";

import Home from "./views/Home";
import Bitcoin from "./views/Bitcoin";

const App = () => {

  
  return (
    <Router>
      <div className="App">
        <Navbar />
        
          <Route exact path="/" component={Home}/>
          <Route path="/bitcoin" component={Bitcoin}/>
        
        
      </div>
    </Router>
    
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
