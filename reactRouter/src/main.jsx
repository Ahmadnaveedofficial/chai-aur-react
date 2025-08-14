import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/user.jsx'
import GitHub, { githubLoder } from './components/GitHub/GitHub.jsx'

// first method but second is more efficient 

// const router =createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children:[
//       {
//         path :'',
//         element: <Home/>

//       },
//       {
//         path : 'about',
//         element : <About/>
//       },
//        {
//         path : 'contact',
//         element : <Contact/>
//       }
//     ]

//   }
// ])

//2nd method more efficient form first one

const router =createBrowserRouter(
  createRoutesFromElements(
     <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>}></Route>
        <Route path='about' element={<About/>}></Route>
        <Route path='contact' element={<Contact/>}></Route>
        <Route path='user/:id' element={<User/>}></Route>
        <Route 
        path='github'
         element={<GitHub/>}
         loader={githubLoder}
         ></Route>
     </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
