import { useState , useEffect } from 'react'
import './App.css'
import Public from './Public';
import Private from './Private';

// Importation Firebase
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';

function App() { 

  const [isConnect, setIsConnect] = useState(false)


  useEffect(() => {

    console.log("app chargé")
    //souscription au changement d'état de l'authentification
    //(lorsque la variable change on est informé)

    onAuthStateChanged(auth , (user) => {

      user != null ? setIsConnect(true) : setIsConnect(false)
      console.log("user :" , user)
    })
  
  }, []) //au chargement de mon application
  


  return (
    <>
    { isConnect ? <Private/> : <Public/> }
    </>
  )
}

export default App
