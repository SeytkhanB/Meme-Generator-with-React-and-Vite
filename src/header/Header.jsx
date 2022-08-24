
import React from 'react'
import TrollFaceImg from '../assets/troll-face.png'

function Header() {
  return (
    <header className='flex items-center justify-between p-5 bg-gradient-to-r from-sky-500 to-sky-300'>
      <div className='flex items-center text-white'>
        <img className='w-8' src={TrollFaceImg} alt="Troll Face" />
        <h2 className='ml-2 text-base font-bold'>Meme Generator</h2>
      </div>
      <div className="text-white">menu</div>
    </header>
  )
}

export default Header
