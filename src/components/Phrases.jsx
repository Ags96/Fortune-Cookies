import React from 'react'

const Phrases = ( { randomPhrase } ) => {
  return (
    <div className='phrase__container'>
      <p className='p__phrase'>
        {randomPhrase.phrase}
      </p>
    </div>
  )
}

export default Phrases