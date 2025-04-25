import { BrowserRouter, Route, Routes } from "react-router-dom";
import BaseLayout from "./components/layout/base-layout";
import HomePage from "./pages/index";
import Meet from "./pages/meeting";
import JoinMeeting from "./pages/start-meeting";
import PageNotFound from "./pages/page-not-found";
import Signin from "./pages/signin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route index path={"/"} element={<HomePage />} />
          <Route>
            <Route path={"/join"} element={<JoinMeeting />} />
            <Route path={"/meet/:roomId"} element={<Meet />} />
            <Route path={"/settings"} element={<Meet />} />
          </Route>
          <Route path={"/signin"} element={<Signin />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
