import React, { Component } from "react";
import logo from "./assets/img/logo.svg";
import Header from "./components/Header";

class App extends Component {
  render() {
    return <Header logo={logo} />;
  }
}

export default App;
