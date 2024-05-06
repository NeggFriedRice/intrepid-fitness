import { useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Intro from './components/Intro'
import Navbar from './components/Navbar'
import Classes from './components/Classes'
import './index.css'
import Membership from './components/Membership'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="outer-container">
        <p>Hello</p>
        <Navbar />
        <Sidebar pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } />
        <main id="page-wrap">
          <Header />
          <Intro />
          <Classes />
          <Membership />
        </main>
      </div>
    </>
  )
}

export default App
