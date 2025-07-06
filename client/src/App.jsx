import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/index";
import Meet from "./pages/meeting";
import PageNotFound from "./pages/page-not-found";
import Signin from "./pages/signin";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index path={"/"} element={<HomePage />} />
        <Route>
          <Route path={"/meet/:roomId"} element={<Meet />} />
        </Route>
        <Route path={"/signin"} element={<Signin />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
