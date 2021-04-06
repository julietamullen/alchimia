import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from "./pages/Home";
import Cocktails from "./pages/Cocktails"
import Contact from "./pages/Contact"
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Switch, useLocation} from "react-router-dom"
import {AnimatePresence} from "framer-motion"

function Location () {
  const location = useLocation();
  return (<div style={{position: 'relative'}}>
  <AnimatePresence>
  <Switch location={location} key={location.pathname}>
  <Route exact path="/" component={Home}></Route>
  <Route exact path="/Cocktails" component={Cocktails}></Route>
  <Route exact path="/Contact" component={Contact}></Route>
  </Switch>
  </AnimatePresence></div>)
}

ReactDOM.render(
  <Router>
  <Location/>
  </Router>,
  document.getElementById('root')
);
reportWebVitals();
