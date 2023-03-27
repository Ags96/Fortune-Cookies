const getRandomPhrase = (arr) => {
    const phraseRandom = Math.floor(Math.random() * arr.length)
    return arr[phraseRandom]
  }

export default getRandomPhrase