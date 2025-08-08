import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Chai from './chai.jsx'

 function MyApp(){
      return(
         <div>
            <h2>
               hello My React App!
            </h2>
         </div>
      )
   }

   const anotherElement=(
      <a href="http://aurabags.pk" target='_blank'> Click to visit the Aurabags</a>
   )
   const anotherName="Ahmad Naveed";
   const reactElement=React.createElement(
      'a',
      {href:'http://aurabags.pk',target :'_blank'},
      'click me to visit Aurabags',
      anotherName
   )

createRoot(document.getElementById('root')).render(
  
// anotherElement
reactElement
//  <>
//    <p>
//   testing with multiple in jsx
//   <Chai/>
// <App/>
// </p>

// </>
)

