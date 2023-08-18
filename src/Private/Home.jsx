import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'

const Home = () => {
//nfn = initiliser une fonction flechés
  const logout = () => { 
    
    console.log('logout')
    signOut(auth) ;

  }
  return (
    <div>Home 
      <button onClick={logout} className="text-red-800"> LogOut </button>
    </div>
  )
}

export default Home