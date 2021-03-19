import React, {useEffect, useState} from 'react'

const BASE_URL = "https://api.datamuse.com"


const RhymesList = ({ word }) => {
  const [rhymes, setRhymes] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/words?sl=${word}`)
    .then(response => response.json())
    .then(data => {
      setRhymes(data)
      /*console.log(data)*/
    });
    console.log(word)
  }, [word])
  
  if (rhymes.length) {
    return (
      <p className="text-white text-white overflow-wrap">
        {rhymes.map(rhyme => (' ' + rhyme.word + ' '))} 
      </p>
    )
  } else {
    return (
      <p className="text-white text-grey">Best rhymes Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, totam?</p>
    )
  }
}

export default RhymesList
