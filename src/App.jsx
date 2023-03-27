import './App.css'
import Button from './components/Button'
import phrases from './utils/phrases.json'
import Phrases from './components/Phrases'
import getRandomPhrase from './utils/getRandomPhrase'
import { useState } from 'react'
import Author from './components/Author'

const backgrounds = [1, 2, 3, 4]

function App() {

  const [randomPhrase, setRandomPhrase] = useState(getRandomPhrase(phrases))
  const [currentBackground, setCurrentBackground] = useState(getRandomPhrase(backgrounds))

  const appStyle = {
    backgroundImage: `url('/images/fondo${currentBackground}.png')`
  }


  return (
    <div style={appStyle} className="App">
      <h1>Galletas de la fortuna</h1>
      <Button 
        setRandomPhrase={setRandomPhrase} 
        setCurrentBackground={setCurrentBackground}/>
      <Phrases randomPhrase={randomPhrase}/>
      <Author randomPhrase={randomPhrase}/>
    </div>
  )
}

export default App
