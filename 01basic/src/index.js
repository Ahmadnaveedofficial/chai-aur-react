import React from 'react';
import ReactDOM from 'react-dom/client';
 import Chai from './chai';
import App from './App';

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
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    reactElement
    // anotherElement
//  <>
//  <App />
//  <Chai/>
//  </>
    
    
 
);


