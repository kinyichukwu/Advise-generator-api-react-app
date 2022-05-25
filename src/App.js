import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [advise, setAdvise] = useState('Click on the button');
  
 async function working() {
   try{
     let response = await axios.get('https://api.adviceslip.com/advice')
     const advice = response.data.slip.advice
     setAdvise(advice);
   
   }catch(err){
     console.error(err)
   }
    }

  return (
    <div className="app">
      <div className="card">
        <h1 className="heading">{advise}</h1>
        <button className="button" onClick={working}>
          <span>GIVE ME ADVICE!</span>
        </button>
      </div>
    </div>
  );
}

export default App;

// function working() {
//     axios.get('https://api.adviceslip.com/advice')
//     .then((response) => {
//       const advice = response.data.slip.advice
//       console.log(advice)
//       setAdvise(advice)
//     }).catch((error) => {console.log(error)})
    
//   }