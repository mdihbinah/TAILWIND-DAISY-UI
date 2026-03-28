import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import DaisyNav from '../component/daisyNav/DaisyNav'
import NavBar from '../component/NavBar/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header>
      <NavBar></NavBar>
      <DaisyNav></DaisyNav>
    </header>
    </>
  )
}

export default App
