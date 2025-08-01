import SuperTokens, { SuperTokensWrapper } from "supertokens-auth-react";
import { getSuperTokensRoutesForReactRouterDom } from "supertokens-auth-react/ui";
import { SessionAuth } from "supertokens-auth-react/recipe/session";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as ReactRouter from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PageNotFound from "./pages/PageNotFound";
import { ComponentWrapper, PreBuiltUIList } from "./components/SuperTokensUI";
import { SuperTokensConfig } from "./lib/supertokens";
import JoinRoom from "./pages/JoinRoom";
import Call from "./pages/Call";

SuperTokens.init(SuperTokensConfig);

function App() {
  return (
    <SuperTokensWrapper>
      <BrowserRouter>
        <main>
          <Navbar />
          <div className="fill" id="home-container">
            <ComponentWrapper>
              <Routes>
                <Route path="/" element={<Home />} />
                {getSuperTokensRoutesForReactRouterDom(
                  ReactRouter,
                  PreBuiltUIList,
                )}
                <Route
                  path="/meet/:roomId"
                  element={
                    <SessionAuth>
                      <JoinRoom />
                    </SessionAuth>
                  }
                />
                <Route path="/c/:roomId" element={<Call />} />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </ComponentWrapper>
            <Footer />
          </div>
        </main>
      </BrowserRouter>
    </SuperTokensWrapper>
  );
}

export default App;
