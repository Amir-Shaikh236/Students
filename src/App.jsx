import { useState } from 'react'
import './App.css'
import Students from './components/StudentList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Students />
    </>
  )
}

export default App
