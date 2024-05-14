import { useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Intro from './components/Intro'
import Navbar from './components/Navbar'
import Classes from './components/Classes'
import './index.css'
import Membership from './components/Membership'
import Team from './components/Team'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="outer-container">
        <Navbar />
        <Sidebar pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } />
        <main id="page-wrap" className="w-[100vw]">
            <Header />
            <Intro />
            <Classes />
            <Team />
            <Membership />
        </main>
      </div>
    </>
  )
}

export default App
