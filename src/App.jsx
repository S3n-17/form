import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/navbar'
import InpInputBox from './components/inp-input-box'
import InpRadioButton from './components/inp-radio-button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <br></br>
      <InpInputBox question="Name" />
      <br></br>
      <InpInputBox question="Email" />
      <br></br>
      <h3 className="q" style={{padding: "0 0 0 100px" , color:"white", fontWeight:"500"}}>Branch</h3>
      <br></br>
      <InpRadioButton option="CSE" />
      <InpRadioButton option="CSE-AIML" />
      <InpRadioButton option="CSE-DS" />
      <InpRadioButton option="CSE-CS" />
      <InpRadioButton option="IT" />
      <br></br>
      <InpInputBox question="Roll Number" />
      <br></br>
      <h3 className="q" style={{padding: "0 0 0 100px" , color:"white", fontWeight:"500"}}>Domain you want to apply for</h3>
      <br></br>
      <InpRadioButton option="Technical" />
      <InpRadioButton option="Content Writing" />
      <InpRadioButton option="Graphic Designing" />
      <InpRadioButton option="Photography" />
      <InpRadioButton option="Video Editing" />
      <InpRadioButton option="Public Relations and Management" />
      <InpRadioButton option="Video Editing" />
      <br></br>

    </>
  )
}

export default App
