import './App.css';

import Quotes from './components/Quotes';
import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';

function App() {

  const [simpsons, setSimpsons] = useState(' ');
  
  const getQuotes = () => {
    axios
    .get('https://simpsons-quotes-api.herokuapp.com/quotes?count=10')
    .then((response) => response.data)
    .then((data) => {
      setSimpsons(data);
    })
  }
  
  useEffect(() => {
    getQuotes();
  }, []);

  return (
    <div className='App'>
      <button className='quoteButton' onClick={getQuotes}>Cick for simpsons quote</button>
      <Quotes quote={simpsons[0].quote} character={simpsons[0].character} image={simpsons[0].image} />
    </div>
  );
}

export default App;