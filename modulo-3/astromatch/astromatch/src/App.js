import React, { useState } from "react";
import { Home } from "./Pages/Home";
import { Match } from "./Pages/Match";

const App = () => {
  const [switchScreen, setSwitchScreen] = useState("home");

  const onScreen = () => {
    switch (switchScreen) {
      case "home":
        return <Home
        changeMatch = {changeMatch} />
      case "match":
        return <Match
        changeHome = {changeHome} />
    }
  }

  const changeHome = () => {
    setSwitchScreen("home")
  }

  const changeMatch = () => {
    setSwitchScreen("match")
  }

  return (
    <div>
      {onScreen()}
    </div>
  );
}

export default App;
