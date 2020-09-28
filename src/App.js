import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Home from "./screens/Home";
import Checkout from "./screens/Checkout";
import Login from "./screens/Login";
import Payment from "./screens/Payment";

import { auth } from "./firebase/Firebase";
import { useStateValue } from "./ReactContextAPI/StateProvider";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51HWA4wHSIitAiqqolr4GPyhR1DCjMxSpprD276uuBmMOuYDgAnwlwS7C9BOHD4YX0Esa2QaThkqkuSZ2vO9J0YOg006dY44ggq"
);

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    // Event Listener
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is >>> ", authUser);

      if (authUser) {
        // user logged in || user already logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // user logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/payment">
          <Header />
          <Elements stripe={promise}>
            <Payment />
          </Elements>
        </Route>
        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>
        <Route path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
