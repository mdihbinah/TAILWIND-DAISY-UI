import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import DaisyNav from '../component/daisyNav/DaisyNav'
import NavBar from '../component/NavBar/NavBar'
import PricingOptions from '../component/PricingOptions/PricingOptions'
import ResultChart from '../component/ResultChart/ResultChart'

const pricingPromise = fetch('pricingData.json').then(res => res.json())


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header>
      <NavBar></NavBar>
      {/* <DaisyNav></DaisyNav> */}
    </header>
    <main>
      <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
        <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
      </Suspense>

      <ResultChart>
        
      </ResultChart>


    </main>
    </>
  )
}

export default App
