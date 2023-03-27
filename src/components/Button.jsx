import getRandomPhrase from "../utils/getRandomPhrase"
import phrases from '../utils/phrases.json'


const Button = ({ setRandomPhrase, setCurrentBackground }) => {

  const changePhrase = () => {
      setRandomPhrase(getRandomPhrase(phrases))
      setCurrentBackground(getRandomPhrase([1, 2, 3, 4]))
  }

  return (
    <button className="btn__change" onClick={changePhrase}>Probar mi suerte</button>
  )
}

export default Button