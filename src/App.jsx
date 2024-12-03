import { Routes, Route } from "react-router"
import Quiz from "./components/Quiz"

import './App.css'
import HomePage from './components/HomePage'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/quiz/:id" element={<Quiz/>} />
    </Routes>
  )
}

export default App
