import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from "./pages/Home"
import Meet from './pages/Meet'
import JoinMeeting from './pages/JoinMeeting'
import ErrorPage from './pages/ErrorPage'
import Signin from './pages/Signin'
import Signup from './pages/Signup'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/join" element={<JoinMeeting />} />
          <Route exact path="/meet/:roomId" element={<Meet />} />
          <Route exact path='*' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
