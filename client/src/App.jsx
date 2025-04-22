import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Meet from "./pages/Meet";
import JoinMeeting from "./pages/JoinMeeting";
import ErrorPage from "./pages/ErrorPage";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ResetPassword from "./pages/ResetPassword";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/reset-password" element={<ResetPassword />} />
          <Route exact path="/join" element={<JoinMeeting />} />
          <Route exact path="/meet/:roomId" element={<Meet />} />
          <Route exact path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
