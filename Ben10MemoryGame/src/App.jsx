import { useState } from 'react'
import Header from './components/Header'
import './App.css'
import Footer from './components/Footer'
import Main from './components/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{position:"relative",height:"100%",display:"flex",flexDirection:"column"}}>
     
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
