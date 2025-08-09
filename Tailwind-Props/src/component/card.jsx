import React, { use } from 'react'

function Card({ username, bnText }) {

  
  return (
   <div className="container mx-auto flex flex-col items-center justify-center rounded-md bg-white">
        <section className="flex flex-col text-center">
          <h1 className="max-w-xl text-6xl font-bold text-black">
            {username}
          </h1>
         
         
        </section>
  
        {/* button section  */}
        <section className=" flex justify-around">
          <button className="mx-1 flex items-center justify-center rounded-lg bg-indigo-600   px-8 py-3 text-lg ">
            {bnText}
          </button>
        
        </section>
  
        <div>
          <img
            src="Amigos Work Space.png"
            alt="image"
            width="500px"
            height="200px"
          />
        </div>
      </div>  
  )
}

export default Card
        