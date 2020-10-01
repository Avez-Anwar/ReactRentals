import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

// NAVIGATION
import Nav from "./components/Nav";
// PAGES
import Home from "./pages/Home/HomePage";
import ManageListings from "./pages/ManageListings/ManageListings.js";
import SignUp from "./pages/SignUp/SignUp";
import Blog from "./pages/Blog/BlogPage";
import RentPay from "./pages/RentPay/RentPay";
import TenantScreening from "./pages/TenantScreening/TenantScreening";
import OtherServices from "./pages/OtherServices/OtherServices";
import ListProperty from "./pages/ListProperty/ListProperty";

import "./index.css";

const App = () => (
  <div>
    <Nav />
    <div className="container">
      <Route exact={true} path="/" component={Home} />
      <Route exaxt path="/ManageListings" component={ManageListings} />
      <Route exact path="/contact" component={SignUp} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/RentPay" component={RentPay} />
      <Route exact path="/TenantScreening" component={TenantScreening} />
      <Route exact path="/OtherServices" component={OtherServices} />
      <Route exact path="/ListProperty" component={ListProperty} />


    </div>
  </div>
);

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
