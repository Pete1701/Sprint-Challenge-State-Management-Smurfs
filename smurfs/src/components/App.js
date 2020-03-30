import React, { Component } from "react";
import "./App.css";
import SmurfsList from "./SmurfsList";
import SmurfsForm from "./SmurfsForm";

const App = () => {
  
  
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfsForm />
        <SmurfsList />
        {/* <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div> */}
      </div>
    );
}


export default App;

