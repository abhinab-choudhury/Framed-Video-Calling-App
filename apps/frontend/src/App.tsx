import SuperTokens, { SuperTokensWrapper } from "supertokens-auth-react";
import { getSuperTokensRoutesForReactRouterDom } from "supertokens-auth-react/ui";
import { SessionAuth } from "supertokens-auth-react/recipe/session";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as ReactRouter from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import { PreBuiltUIList, SuperTokensConfig, ComponentWrapper } from "./config";
import Home from "./pages/Home";
import PageNotFound from "./pages/404";
import Meet from "./pages/Meet";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

// Initialize SuperTokens - ideally in the global scope
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
                {/* This shows the login UI on "/auth" route */}
                {getSuperTokensRoutesForReactRouterDom(
                  ReactRouter,
                  PreBuiltUIList,
                )}

                {/* This protects the "/dashboard" route so that it shows
                  <Dashboard /> only if the user is logged in.
                  Else it redirects the user to "/auth" */}
                <Route
                  path="/dashboard"
                  element={
                    <SessionAuth>
                      <Dashboard />
                    </SessionAuth>
                  }
                />
                <Route
                  path="/meet/:roomId"
                  element={
                    <SessionAuth>
                      <Meet />
                    </SessionAuth>
                  }
                />
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
