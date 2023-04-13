import React from 'react'
import Linebreak from "./card-images/pattern-divider-desktop.svg";
import icon from "./card-images/icon-dice.svg";
import { useState, useEffect } from 'react';

const Card = () => {
  const [text, setText] = useState([])

  const fetchAdvice = async () => {
    const response  = await fetch("https://api.adviceslip.com/advice")
    const data = await response.json()
    console.log(data)
    setText(data)

  }

    useEffect(() => {
      fetchAdvice()
    },  [])


  return (
    <div className=" font-bold text-center bg-dark-blue h-screen flex relative">
      <div className='bg-dark-grayish-blue w-1/3 h-64 mx-auto my-auto rounded-xl p-10 flex flex-col item-center justify-center relative'>
        <h2 className='text-neon-green'>ADVICE #{text.slip.id} </h2>
        <p className='mt-10 mb-10 text-light-cyan text-lg bg-red'>" {text.slip.advice} "</p>
        <img src ={Linebreak} alt="className"/>
        
        <button className=' bg-neon-green rounded-full cursor-pointer p-5  flex   absolute bottom-0 transition 0.3s ease-in-out  
          left-1/2 transform -translate-x-1/2 hover:bg-hsl(150, 59%, 54%)' onClick={fetchAdvice}>
        <img src ={icon} alt="className"    />

        </button>
      </div>
      
    </div>
  )
}

export default Card;