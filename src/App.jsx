import './App.css'
import Home from './components/Home'
import Navbar from "./components/Navbar"
import Sigin from "./components/Signin"
import Signup from './components/Signup'
import Meet from "./components/Meet"
import { BrowserRouter, Routes, Route} from 'react-router-dom'; 

import { v4 as uuidv4 } from 'uuid';

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/framed" element={<Home />} /> 
          <Route exact path="/framed/signin" element={<Sigin />} /> 
          <Route exact path="/framed/signup" element={<Signup />} />
          <Route exact path={`/framed/meet/:id`} element ={ <Meet /> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
