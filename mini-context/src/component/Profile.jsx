import React,{useContext} from 'react'
import UserContext from '../context/UserContext'



function Profile() {
     const {user}=useContext(UserContext)

  if (! user)return (<div>Please Login first</div>)

  return(
         <div>
            Welcome Back 
            Username:{user.username}
            password:{user.password}
         </div>
  )

  
}

export default Profile