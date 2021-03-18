import React, { useState, useEffect } from 'react';
import Header from "./components/Header";
import RhymesList from "./components/RhymesList";
import './App.css';

const BASE_URL = "https://api.datamuse.com"

function App() {
  const [rhymes, setRhymes] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/words?sl=cat`)
    .then(response => response.json())
    .then(data => {
      setRhymes(data)
      console.log(data)
    })
  }, [])

  return (
    <div className="App">
      <Header />
      <section className="main-section">
        <span className="text-white text-bold text-lg mb-3">Sentences that user speaks</span>
        <RhymesList list={rhymes} />
      </section>
    </div>
  );
}

export default App;
