import React, { useState } from "react";
import ApplicationForm from "./Pages/ApplicationForm";
import Home from "./Pages/Home";
import ListTrips from "./Pages/ListTrips";
import Login from "./Pages/Login";

function App() {

  const [screen, setScreen] = useState("home")

  const onScreen = () => {
    switch(screen){
      case "home":
        return <Home
        changeHome = {changeHome}
        changeLogin = {changeLogin}
        changeListTrips = {changeListTrips}
        changeApplicationForm = {changeApplicationForm}
        />
      case "login":
        return <Login
        changeHome = {changeHome}
        changeLogin = {changeLogin}
        changeListTrips = {changeListTrips}
        changeApplicationForm = {changeApplicationForm}
        />
      case "listTrips":
        return <ListTrips
        changeHome = {changeHome}
        changeLogin = {changeLogin}
        changeListTrips = {changeListTrips}
        changeApplicationForm = {changeApplicationForm}
        />
      case "applicationForm":
        return <ApplicationForm
        changeHome = {changeHome}
        changeLogin = {changeLogin}
        changeListTrips = {changeListTrips}
        changeApplicationForm = {changeApplicationForm}
        />
    }
  }

  const changeHome = () => {
    setScreen("home")
  }

  const changeLogin = () => {
    setScreen("login")
  }

  const changeListTrips = () => {
    setScreen("listTrips")
  }

  const changeApplicationForm = () => {
    setScreen("applicationForm")
  }

  return (
    <div className="App">
      {onScreen()}
    </div>
  );
}

export default App;
