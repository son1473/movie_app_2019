import React from "react";
//import logo from "./logo.svg";
import "./App.css";

function Food({ fav }) {
  console.log({ fav });
  return <h1>I like Potato</h1>;
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food fav="Kimchi" />
    </div>
  );
}

export default App;
