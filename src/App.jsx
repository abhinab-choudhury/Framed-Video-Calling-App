import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Signin from './components/Signin'
import Footer from './components/Footer'
import ErrorPage from './components/ErrorPage'
import Signup from './components/Signup'
import Meet from './components/Meet'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/meet/:roomId" element={<Meet />} />
          <Route exact path='*' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
