//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components

import Counter from "./component/Counter";

let initialInterval = 10;

//render your react application
setInterval(() => {
  ReactDOM.render(
    <Counter initialValue={initialInterval}></Counter>,
    document.querySelector("#app")
  );
  initialInterval++;
}, 1000);



