import React from 'react'

const RhymesList = ({ list }) => {
  if (list.length) {
    return (
      <p className="text-white text-white overflow-wrap text-md">
        {list.map(rhyme => (' ' + rhyme.word + ' '))} 
      </p>
    )
  } else {
    return (
      <p className="text-white text-grey">Best rhymes Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, totam?</p>
    )
  }
}

export default RhymesList
