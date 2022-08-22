import React from 'react';
import Axios from "axios";
import { useState} from 'react';

export const Text = () => {
    const [name,setName]= useState("");
    const[predictedAge, setPredictedAge]=useState(0)
    const fetchData=()=>{
        Axios.get(`https://api.agify.io/?name=${name}`)
        .then((res) => {
            setPredictedAge(res.data)
        }) ;
    }
    

  return (
    <div>
    <input placeholder='name' onChange={(event) => {
        setName(event.target.value);
    }}
    />

    <button onClick={fetchData}> Predict Age </button>  
    <h1> Predicated Name:{predictedAge.name}</h1>
    <h1> Predicated Age:{predictedAge.age}</h1>
    <h1> Predicated Count:{predictedAge.count}</h1>
    
   </div>
  );
};


