import React from 'react'

const Author = ( { randomPhrase } ) => {
  return (
    <div className='author__container'>
        <p className='p__author'>
            {randomPhrase.author}
        </p>
    </div>
 )
}

export default Author