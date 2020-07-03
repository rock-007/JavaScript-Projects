import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./Nav";
import Sidebar from "./Component/Sidebar";
import Basket from "./Component/Basket";
import Phones from "./Component/Phones";
import Accessories from "./Component/Accessories";
import Signin from "./Component/Signin";
import Error from "./Error";
import Footer from "./Component/Footer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const userAccountinfo = () => {
  // user info can be loaded after refresh
  return window.localStorage.getItem("user-info"); // !! : cast to boolean
};
const isLoggedIn = () => {
  // user info can be loaded after refresh
  return window.localStorage.getItem("user-status"); // !! : cast to boolean
};

function App() {
  const [siginalready, setifsignedin] = useState(isLoggedIn());

  const [userinfonew, setUserinfo] = useState(userAccountinfo());

  let url = "http://localhost:5000/api/verifyifloginalready";

  let options = {
    credentials: "include",
    method: "POST",
  };

  let verifyifloginalready = new Request(url, options);
  useEffect(() => {
    credentailverify();
  }, []);

  function credentailverify() {
    (async () => {
      const x1 = await fetch(verifyifloginalready)
        .then((res) => {
          if (res.status == 400 || res.status == 401) {
            console.log(res.status);
            // to do call delete current  cookies function
            window.localStorage.removeItem("user-info");

            return setifsignedin(false);
          } else if (siginalready == false) {
            setifsignedin(true);

            return res.json();
          } else {
            return;
          }
        })
        .then((data) => {
          window.localStorage.setItem("user-info", data.data);
          window.localStorage.setItem("user-status", true);
        })
        .catch((err) => console.log("err"));
      console.log(userinfonew);
      console.log(siginalready);

      return x1;
    })();
  }

  return (
    <Router>
      <div className="App">
        <header className="header">
          <Nav userinfo={userinfonew} userstatus={siginalready} />
        </header>

        <div className="main">
          <Sidebar />
          <Switch>
            <Route
              path="/"
              exact
              // not sure if we need to pass states for h
              render={(props) => <Home {...props} userinfo={userinfonew} />}
            />
            // render here work for passing the ste into the child component //
            from router {/* render={props=>(<newComponent}/> )} */}
            <Route
              path="/basket"
              exact
              render={(props) => (
                <Basket
                  {...props}
                  userinfo={userinfonew}
                  userstatus={siginalready}
                />
              )}
            />
            <Route
              path="/signin"
              exact
              render={(props) => (
                <Signin
                  {...props}
                  userinfo={userinfonew}
                  userstatus={siginalready}
                />
              )}
            />
            <Route
              path="/accessories"
              exact
              render={(props) => (
                <Accessories
                  {...props}
                  userinfo={userinfonew}
                  userstatus={siginalready}
                />
              )}
            />
            <Route
              path="/phones"
              exact
              render={(props) => (
                <Phones
                  {...props}
                  userinfo={userinfonew}
                  userstatus={siginalready}
                />
              )}
            />
          </Switch>
        </div>

        <div className="footer">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1> Home page</h1>
  </div>
);

export default App;
