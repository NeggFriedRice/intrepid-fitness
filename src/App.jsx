import { useState } from 'react'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>Hello</p>
      <Header />
    </>
  )
}

export default App
