import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <h1 className="text-5xl font-bold">This Website is work in Progress.</h1>         
      </section>

    

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
