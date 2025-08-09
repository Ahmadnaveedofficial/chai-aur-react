//    First code snippet

// import { useState,useCallback,useEffect,useRef } from 'react'
// function App() {
//   const [length, setlength] = useState(8)
//   const [uppercase, setuppercase] = useState(false)
//   const [lowercase, setlowercase] = useState(false)
//   const [numbers, setnumbers] = useState(false)
//   const [symbols, setsymbols] = useState(false)
//   const [password, setpassword] = useState('')

//   const generatePassword = useCallback(()=>{
//     let  lowercaseChars="abcdefghijklmnopqrstuvwxyz"
//     let uppercaseChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//     let numbersChars = "0123456789";
//     let symbolsChars = "!@#$%^&*()_+{}[]<>?";
//     let str = "";

//   if (uppercase) {
//     str += uppercaseChars;
//   }
//   if (lowercase){
//    str += lowercaseChars;
//   }
//   if (numbers){
//    str +=numbersChars;
//   }
//   if (symbols){
//    str+=symbolsChars;
//   }
// let password = "";
//   for (let i=1;i<=length; i++)
//      {   
//        let char=Math.floor(Math.random() * str.length);
//       password+=str.charAt(char);
//   }
//   setpassword(password);
//   }, [length,uppercase,lowercase,numbers,symbols,setpassword])
//   useEffect(() => {
//     generatePassword();
//   }, [length, uppercase, lowercase, numbers, symbols, generatePassword]);
 
//   const passwordRef = useRef(null);
//   const copyPassword=useCallback(()=>{
//     passwordRef.current?.select();
//     passwordRef.current?.setSelectionRange(0,81); 
//     window.navigator.clipboard.writeText(password)
//   }, [password])

//   return (
//     <>
//    <div className='w-full max-w-md mx-auto  rounded-lg px-4 my-8'> 
//      <h1 className='text-4xl text-center text-yellow-400 bg-gradient-to-br from-purple-900 via-slate-500-900 to-pink-900 font-extrabold cursor-pointer '>
//       Password Generator</h1><br/></div>

//       <div className=' w-auto max-w-2xl mx-auto  rounded-lg px-4 my-8 bg-purple-950  text-gray-300'>
//         <div className=' flex  rounded-lg overflow-hidden mb-4'>
//             <input type="text" 
//             value={password}
//             className='outline-none w-md py-1 px-1 my-8 rounded-lg w-screen bg-gray-800 text-gray-300 font-bold'
//             placeholder='Password'
//             readOnly
//             ref={passwordRef}
//             />
//             <div>
//                <button onClick={copyPassword} className='bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900 outline-none p-3 ml-1 mt-6 rounded-lg  font-bold hover:scale-105 hover:brightness-110'>Copy</button>
//             </div>
//             <div>
//                <button className='bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900 outline-none p-3 ml-1 mt-6 rounded-lg font-bold hover:scale-105 hover:brightness-110'
//                onClick={generatePassword}>Generate</button>
//             </div>
//         </div>
//         <div className='text-center text-gray-400 font-bold mb-4'>
//           <p>Customize your password</p><br />
//           <p>Choose the length and character types</p>
//         </div>
//         <div className='flex text-sm gap-x-2 text-gray-400 font-bold '>
//           <div className='flex items-center gap-x-2'>
//             <input
//              type="range"
//              min={6}
//              max={80}
//              value={length} 
//              className='cursor-pointer'
//              onChange={(event)=>{
//               setlength(event.target.value)
//              }} />
//              <label>Length: {length}</label>      
//           </div>
//           <div className='flex items-center gap-x-2'> 
//             <label>UpperCase</label>
//             <input
//              type="checkbox"
//              checked={uppercase}
//              onChange={(event)=>{
//               setuppercase(event.target.checked)    }}
//               className='cursor-pointer'
//               />  
//                 <label>LowerCase</label>
//               <input type="checkbox"
//               checked={lowercase}
//               onChange={(event)=>{
//                 setlowercase(event.target.checked)
//               }} 
//               className='cursor-pointer' />
//               <label>Numbers</label>
//               <input type="checkbox"
//               checked={numbers}
//               onChange={(event)=>{
//                 setnumbers(event.target.checked)
//               }} 
//               className='cursor-pointer' />
//               <label>Symbols</label>
//               <input type="checkbox"
//               checked={symbols}
//               onChange={(event)=>{
//                 setsymbols(event.target.checked)
//               }} 
//               className='cursor-pointer' />
//               <br /><br />
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default App




//    second code snippet
// user interface is updated with gradient colors and better styling



import { useState, useCallback, useEffect, useRef } from 'react';

function App() {
  const [length, setlength] = useState(8);
  const [uppercase, setuppercase] = useState(false);
  const [lowercase, setlowercase] = useState(false);
  const [numbers, setnumbers] = useState(false);
  const [symbols, setsymbols] = useState(false);
  const [password, setpassword] = useState('');

  const generatePassword = useCallback(() => {
    let lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    let uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let numbersChars = '0123456789';
    let symbolsChars = '!@#$%^&*()_+{}[]<>?';
    let str = '';

    if (uppercase) str += uppercaseChars;
    if (lowercase) str += lowercaseChars;
    if (numbers) str += numbersChars;
    if (symbols) str += symbolsChars;

    let password = '';
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      password += str.charAt(char);
    }
    setpassword(password);
  }, [length, uppercase, lowercase, numbers, symbols, setpassword]);

  useEffect(() => {
    generatePassword();
  }, [length, uppercase, lowercase, numbers, symbols, generatePassword]);

  const passwordRef = useRef(null);
  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 81);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-950 via-purple-900 to-black p-6">
        <div className="w-full max-w-2xl bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20">
          <h1 className="text-4xl font-extrabold text-center bg-gradient-to-r from-pink-500 via-purple-400 to-indigo-400 text-transparent bg-clip-text mb-8">
            Password Generator
          </h1>

          {/* Password Display */}
          <div className="flex items-center bg-black/40 rounded-lg overflow-hidden shadow-lg">
            <input
              type="text"
              value={password}
              readOnly
              ref={passwordRef}
              placeholder="Password"
              className="flex-grow bg-transparent text-lg text-white px-4 py-3 outline-none font-semibold tracking-wide"
            />
            <button
              onClick={copyPassword}
              className="bg-gradient-to-br from-pink-600 to-purple-700 px-5 py-3 font-bold text-white hover:scale-105 transition rounded-none"
            >
              Copy
            </button>
            <button
              onClick={generatePassword}
              className="bg-gradient-to-br from-indigo-600 to-purple-700 px-5 py-3 font-bold text-white hover:scale-105 transition rounded-r-lg"
            >
              Generate
            </button>
          </div>

          {/* Instructions */}
          <div className="text-center text-gray-300 mt-6">
            <p className="font-semibold">Customize your password</p>
            <p className="text-sm opacity-80">Choose the length and character types</p>
          </div>

          {/* Settings */}
          <div className="mt-6 space-y-6">
            {/* Length Slider */}
            <div className="flex items-center gap-x-4">
              <input
                type="range"
                min={6}
                max={80}
                value={length}
                onChange={(event) => setlength(event.target.value)}
                className="w-full accent-pink-500"
              />
              <label className="text-white font-semibold whitespace-nowrap">
                Length: {length}
              </label>
            </div>

            {/* Options */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <label className="flex items-center gap-x-2 text-white">
                <input
                  type="checkbox"
                  checked={uppercase}
                  onChange={(event) => setuppercase(event.target.checked)}
                  className="accent-pink-500 w-5 h-5"
                />
                Uppercase
              </label>
              <label className="flex items-center gap-x-2 text-white">
                <input
                  type="checkbox"
                  checked={lowercase}
                  onChange={(event) => setlowercase(event.target.checked)}
                  className="accent-pink-500 w-5 h-5"
                />
                Lowercase
              </label>
              <label className="flex items-center gap-x-2 text-white">
                <input
                  type="checkbox"
                  checked={numbers}
                  onChange={(event) => setnumbers(event.target.checked)}
                  className="accent-pink-500 w-5 h-5"
                />
                Numbers
              </label>
              <label className="flex items-center gap-x-2 text-white">
                <input
                  type="checkbox"
                  checked={symbols}
                  onChange={(event) => setsymbols(event.target.checked)}
                  className="accent-pink-500 w-5 h-5"
                />
                Symbols
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
