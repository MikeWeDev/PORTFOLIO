import './index.css'
import Home from './Home'
import { BrowserRouter as Router, Routes ,Route } from "react-router-dom"

function App() {
  return (
   <>
   <Router>
      <Routes>
       <Route index path='/' element={<Home  /> } />
       
      </Routes>
    </Router>
   </>
  
  )
}

export default App
