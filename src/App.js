import React, { useState, useEffect } from 'react';
// import Header from "./components/Header";
import RhymesList from "./components/RhymesList";
import './App.css';


const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
const Recognition = new SpeechRecognition();
Recognition.lang = 'en-US';
Recognition.interimResults = true;
Recognition.continuous = true;

function App() {
  const [speech, setSpeech] = useState(null);
  const [isListening, setIsListening] = useState(false);
  const [lastWord, setLastWord] = useState("");

  useEffect(() => {
    handleListen();
  }, [isListening])


  const handleListen = () => {
    if (isListening) {
      Recognition.start();
      Recognition.onend = () => {
        console.log("Continue ...");
        Recognition.start();
      }
    } else {
      Recognition.stop();
      Recognition.onend = () => {
        console.log("Stopped Recognition on Click")
      }
    }
    Recognition.onstart = () => {
      console.log('Recognition on')
    }
    Recognition.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');
      console.log(transcript);
      setSpeech(transcript);
      const arr = transcript.split(" ");
      setLastWord(arr[arr.length-1])
      Recognition.onerror = event => console.log(event.error);
    }
  }

  const handleStop = () => {
    setIsListening(false)
    setSpeech("");
  }

  return (
    <div className="App">
      <header className="main-header">
        <h1 className="brand">Freestyle</h1>
        <p className="text-bold">Press start to start rhyming using your voice!</p>
        <button onClick={() => setIsListening(true)} className="btn-primary mb-2 mt-2">Start</button>
        <button onClick={handleStop} className="btn-primary">
          Stop
        </button>
      </header>
      <section className="main-section">
        <span className="text-white text-bold text-md mb-3">{speech ? speech : "Sentences that user speaks"}</span>
        <RhymesList word={lastWord} />
      </section>
    </div>
  );
}

export default App;
