import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Navbar from "./Navbar/Navbar";
import KillBoost from "./Pages/KillBoost";
//routing
import PrivateRoute from "./Pages/authComponents/PrivateRoute";
///////////////////////////////////////////////////////////////
import ContactUs from "./Pages/ContactUs";
import RankBoost from "./Pages/RankBoost/RankBoost";
import AcheivementBadges from "./Pages/AcheivementBadges/AcheivementBadges.jsx";
import WinBoost from "./Pages/WinBoost";
import Login from "./Pages/authComponents/Login";
import Register from "./Pages/authComponents/Register";
import ForgotPassword from "./Pages/authComponents/ForgotPassword";
import ResetPassword from "./Pages/authComponents/ResetPassword";
import Checkout from "./Pages/authComponents/Checkout";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Switch>
          <PrivateRoute
            exact
            path="/checkout"
            component={Checkout}
          ></PrivateRoute>
          <Route exact path="/" component={Home}></Route>
          <Route path="/rank-boosting" exact component={RankBoost}></Route>
          <Route path="/contact-us" exact component={ContactUs}></Route>
          <Route path="/kills-boosting" exact component={KillBoost}></Route>
          <Route
            path="/acheivement-badges"
            exact
            component={AcheivementBadges}
          ></Route>
          <Route path="/wins-boosting" exact component={WinBoost}></Route>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/register" exact component={Register}></Route>
          <Route
            exact
            path="/forgotpassword"
            component={ForgotPassword}
          ></Route>
          <Route
            path="/passwordreset/:resetToken"
            exact
            component={ResetPassword}
          ></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
