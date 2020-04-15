import React, { Component } from "react";
import {render} from 'react-dom';
import Lottie from "react-lottie";
import logoAnimation from "./logo.js";

class App extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: window.innerWidth,
          height: window.innerHeight
        }}
      >
        <div style={{ width: "60%" }}>
          <Lottie options={{ animationData: logoAnimation, loop: false }} />
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

