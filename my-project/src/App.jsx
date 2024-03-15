import Layout from './components/Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import { HashRouter as Router,Route,Routes } from 'react-router-dom'
import './index.scss'
import Contact from './components/Contact/Contact'
import Portfolio from './components/Portfolio/Portfolio-box'
function App() {
  return (
   <>
  <Router>
    <Routes>
      <Route path='/' element={ <Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path="/contact" element={<Contact />} />
      <Route path="/portfolio" element={<Portfolio />} />

      </Route>
     
    </Routes>
  </Router>
 
   </>
  
  )
}

export default App
 