import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

//routing
import PrivateRoute from "./Pages/authComponents/PrivateRoute";
///////////////////////////////////////////////////////////////
import ContactUs from "./Pages/ContactUs/ContactUs";
import RankBoost from "./Pages/RankBoost/RankBoost";
import AcheivementBadges from "./Pages/AcheivementBadges/AcheivementBadges.jsx";
import Home from "./Pages/Home/Home";
import Login from "./Pages/authComponents/Login";
import Register from "./Pages/authComponents/Register";
import ForgotPassword from "./Pages/authComponents/ForgotPassword";
import ResetPassword from "./Pages/authComponents/ResetPassword";
import Cart from "./Pages/Cart/Cart.jsx";
import Blog from "./Pages/Blog/Blog";
import ComingSoon from "./Pages/ComingSoon/ComingSoon";
import Sucess from "./Pages/Sucess/Sucess";
import Profile from "./Pages/Profile/Profile";
import KillBoost from "./Pages/KillsBoost/KillBoost";
function App() {
  return (
    <>
      <Router>
        <div className="app">
          <Route
            path="/"
            render={({ location }) => {
              window.gtag("config", "AW-388171063", {
                page_path: location.pathname + location.search,
              });
            }}
          />
          <Switch>
            <Route exact path="/cart" component={Cart}></Route>
            <Route path="/" exact component={Home}></Route>
            <Route path="/rank-boosting" exact component={RankBoost}></Route>
            <Route path="/contact-us" exact component={ContactUs}></Route>
            <Route path="/kills-boosting" exact component={KillBoost}></Route>
            <Route
              path="/acheivement-badges"
              exact
              component={AcheivementBadges}
            ></Route>
            <Route path="/wins-boosting" exact component={ComingSoon}></Route>
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
            <Route path="/blog" exact component={Blog}></Route>
            <Route path="/success" exact component={Sucess}></Route>
            <PrivateRoute>
              <Route path="/profile" exact component={Profile}></Route>
            </PrivateRoute>
          </Switch>
        </div>{" "}
      </Router>
    </>
  );
}

export default App;
