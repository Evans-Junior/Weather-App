import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./login/Login";
import Weather from "./components/Weather";
import Forget from "./forget/Forget";
import Signup from "./signup/Signup";







function App() {
  const [userData, setUserData] = useState(false)

  function updateLoggedInUserInfo (user) {
    setUserData(user)
  }
  

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" login>
            <Login />
          </Route>

          <Route exact path="/weather">
            <Weather userData={userData}
            updateUser={updateLoggedInUserInfo} />
          </Route>

          <Route exact path="/forget">
            <Forget />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;


