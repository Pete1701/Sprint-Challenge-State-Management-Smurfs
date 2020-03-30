import React, { useState, useEffect } from "react";
import { Route } from 'react-router-dom';
import "./App.css";
import SmurfsList from "./SmurfsList";
import SmurfsForm from "./SmurfsForm";
import { SmurfContext } from "../contexts/SmurfContext";
import axios from 'axios'

const App = () => {
    const [smurfs, setSmurfs] = useState([])

    useEffect(() => {
      axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
          console.log('GET', res.data)
          setSmurfs(res.data)
        })
        .catch(err => console.log(err));
    }, [])


    const callSmurf = smurf => {
      setSmurfs([...smurfs, smurf])
    }
  
    return (
      <div className="App">
        <h1>SMURFS!</h1>
        <SmurfContext.Provider value={{ smurfs, callSmurf, setSmurfs }}>
          <SmurfsForm />
          <Route exact path='/'>
            <SmurfsList />
          </Route>          
        </SmurfContext.Provider>        
      </div>
    );
}


export default App;
