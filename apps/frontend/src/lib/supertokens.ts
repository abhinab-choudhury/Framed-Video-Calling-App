import ThirdParty, {
  Github,
  Google,
} from "supertokens-auth-react/recipe/thirdparty";
import { GetRedirectionURLContext } from "supertokens-auth-react/lib/build/types";
import Passwordless from "supertokens-auth-react/recipe/passwordless";
import Session from "supertokens-auth-react/recipe/session";
import { BACKEND_BASE_URL, FRONTEND_BASE_URL } from "./env";

export function getApiDomain() {
  const apiUrl = BACKEND_BASE_URL;
  return apiUrl;
}

export function getWebsiteDomain() {
  const websiteUrl = FRONTEND_BASE_URL;
  return websiteUrl;
}

export const SuperTokensConfig = {
  appInfo: {
    appName: "Framer",
    apiDomain: getApiDomain(),
    websiteDomain: getWebsiteDomain(),
    apiBasePath: "/auth",
    websiteBasePath: "/auth",
  },

  recipeList: [
    ThirdParty.init({
      signInAndUpFeature: {
        providers: [Github.init(), Google.init()],
      },
    }),
    Passwordless.init({
      contactMethod: "EMAIL",
    }),
    Session.init(),
  ],

  getRedirectionURL: async (context: GetRedirectionURLContext) => {
    if (context.action === "SUCCESS") {
      return "/";
    }
    return undefined;
  },
};
