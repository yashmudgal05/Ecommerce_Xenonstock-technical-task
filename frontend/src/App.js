import "./App.css";
import { useEffect, useState } from "react";
import Header from "./component/layout/Header/Header.js";
import Footer from "./component/layout/Footer/Footer.js";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import React from "react";
import Home from "./component/Home/Home";

import Products from "./component/Product/Products";

import LoginSignUp from "./component/User/LoginSignUp";

import UserOptions from "./component/layout/Header/UserOptions";
import { useSelector } from "react-redux";

import axios from "axios";
import Contact from "./component/layout/Contact/Contact";
import About from "./component/layout/About/About";
import NotFound from "./component/layout/Not Found/NotFound";

function App() {

  return (
    <Router>
    <Header />
  
  <Switch>

    <Route exact path="/" component={Home} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/about" component={About} />
    <Route exact path="/products" component={Products} />

    <Route exact path="/login" component={LoginSignUp} />


</Switch>

    <Footer/>
    </Router>
  );
}

export default App;
