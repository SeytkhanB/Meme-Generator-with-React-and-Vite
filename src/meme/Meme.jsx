
import React, {useEffect, useState} from 'react'
import MemeImg from '../assets/meme-img.png'
// import Data from '../data/memeData'
import './Meme.css'

function Meme() {
  const [state, setState] = useState({
    topText: '',
    bottomText: '',
    randomImage: MemeImg
  })
  const [allMemes, setAllMemes] = useState([])

  // We receive data only once and set data to state "allMemes"
  // then use it
  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://api.imgflip.com/get_memes')
      const data = await res.json()
      setAllMemes(data.data.memes)
    }
    fetchData()
  }, [])


  function getImage() {
    const memeImg = allMemes[Math.floor(Math.random() * allMemes.length)]
    setState(prevSetState => {
      return {
        ...prevSetState,
        randomImage: memeImg.url
      }
    })
    // console.log(memeImg.name)  // for future ideas
  }


  function handleChange(event) {
    const {name, value} = event.target

    setState(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    })
  }


  return (
    <main className='grid place-items-center p-8'>

      <div className="mb-8 w-full max-w-3xl">

        <div className="mb-8 flex justify-between">
          <input 
            className='w-2/4 outline-0 border-solid border-2 border-gray-300 rounded p-2' 
            type="text" 
            placeholder='Top text'
            name='topText'
            value={state.topText}
            onChange={handleChange}
          />
          <input 
            className='w-2/4 outline-0 border-solid border-2 border-gray-300 rounded p-2 ml-4' 
            type="text" 
            placeholder='Bottom text'
            name='bottomText'
            value={state.bottomText}
            onChange={handleChange}
          />
        </div>

        <button 
          onClick={getImage} 
          className='text-white bg-gradient-to-r from-sky-500 to-sky-300 rounded p-2 w-full'
        >
          Get a new meme image
        </button>

      </div>

      <div className="meme">
        <img 
          className='meme-img' 
          alt="Meme image"
          src={state.randomImage} 
        />
        <h1 className='meme-text top'>{state.topText}</h1>
        <h1 className='meme-text bottom'>{state.bottomText}</h1>
      </div>

    </main>
  )
}

export default Meme