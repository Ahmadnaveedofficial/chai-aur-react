import { useState } from 'react'

function App() {
  const [background, setBackground] = useState("olive")

  return (
    <>
      <div
        className="w-full h-screen"
        style={{ backgroundColor: background }}
      ></div>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-2 shadow-lg bg-white px-3 py-3 rounded-2xl cursor-pointer" >
          <button onClick={()=>setBackground("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-xl' style={{backgroundColor:"red"}}>Red</button>
          <button onClick={()=>setBackground("blue")}  className='outline-none px-4 py-1 rounded-full text-white shadow-xl' style={{backgroundColor:"blue"}}>Blue</button>
          <button onClick={()=>setBackground("green")}  className='outline-none px-4 py-1 rounded-full text-white shadow-xl' style={{backgroundColor:"green"}}>Green</button>
          <button onClick={()=>setBackground("pink")}  className='outline-none px-4 py-1 rounded-full text-white shadow-xl' style={{backgroundColor:"pink"}}>Pink </button>
          <button onClick={()=>setBackground("orange")}  className='outline-none px-4 py-1 rounded-full text-white shadow-xl' style={{backgroundColor:"orange"}}>Orange</button>
          <button onClick={()=>setBackground("brown")}  className='outline-none px-4 py-1 rounded-full text-white shadow-xl' style={{backgroundColor:"Brown"}}>Brown</button>
          <button onClick={()=>setBackground("aqua")}  className='outline-none px-4 py-1 rounded-full text-white shadow-xl' style={{backgroundColor:"Aqua"}}>Aqua</button>
          <button onClick={()=>setBackground("skyblue")} className='outline-none px-4 py-1 rounded-full text-white shadow-xl' style={{backgroundColor:"SkyBlue"}}>Sky Blue</button>
          <button onClick={()=>setBackground("violet")}  className='outline-none px-4 py-1 rounded-full text-white shadow-xl' style={{backgroundColor:"Violet"}}>Violet</button>
          <button onClick={()=>setBackground("gray")}  className='outline-none px-4 py-1 rounded-full text-white shadow-xl' style={{backgroundColor:"Gray"}}>Gray</button>
          <button onClick={()=>setBackground("black")}  className='outline-none px-4 py-1 rounded-full text-white shadow-xl' style={{backgroundColor:"Black"}}>Black</button>
          <button onClick={()=>setBackground("yellow")}  className='outline-none px-4 py-1 rounded-full text-white shadow-xl' style={{backgroundColor:"Yellow"}}>Yellow</button>
          <button onClick={()=>setBackground("purple")} className='outline-none px-4 py-1 rounded-full text-white shadow-xl' style={{backgroundColor:"Purple"}}>Purple</button>
          <button onClick={()=>setBackground("teal")}  className='outline-none px-4 py-1 rounded-full text-white shadow-xl' style={{backgroundColor:"Teal"}}>Teal</button>
          <button onClick={()=>setBackground("coral")}  className='outline-none px-4 py-1 rounded-full text-white shadow-xl' style={{backgroundColor:"Coral"}}>Coral</button>
          <button onClick={()=>setBackground("gold")}  className='outline-none px-4 py-1 rounded-full text-white shadow-xl' style={{backgroundColor:"Gold"}}>Gold</button>
          <button onClick={()=>setBackground("silver")}  className='outline-none px-4 py-1 rounded-full text-white shadow-xl' style={{backgroundColor:"Silver"}}>Silver</button>
          <button onClick={()=>setBackground("navy")}  className='outline-none px-4 py-1 rounded-full text-white shadow-xl' style={{backgroundColor:"Navy"}}>Navy</button>
          <button onClick={()=>setBackground("maroon")}  className='outline-none px-4 py-1 rounded-full text-white shadow-xl' style={{backgroundColor:"Maroon"}}>Maroon</button>
         

        </div>
      </div>
    </>
  )
}

export default App
