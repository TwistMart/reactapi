
//import { useState } from 'react';
import './App.css';
import Axios from "axios"; 
import { useEffect, useState } from 'react';
import {Text} from "./text"


function App() {
  const [catFact, setCatFact]=useState("");

  const DisplayCatfact = ()=>{
    Axios.get("https://catfact.ninja/fact")
    .then((res) => {
      setCatFact(res.data.fact);
    });

  };  

  useEffect(() => { // useEffect removes the process of mounting and unmounting every time
    DisplayCatfact();
    }, []);
  // fetch("https://catfact.ninja/fact")
  // .then((res) => res.json()) // take the response from the api and convert response to javascript object
  // .then((data) => { // store the javascript object into data
  //   console.log(data); 
  // });

 

  return (
    <div className="App">
    <button onClick={DisplayCatfact}> Generate Catfact </button>
    <p> {catFact} </p>  
    <Text/>
    </div>
  );
}

export default App;
