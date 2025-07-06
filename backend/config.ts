import Passwordless from "supertokens-node/recipe/passwordless";
import Session from "supertokens-node/recipe/session";
import Dashboard from "supertokens-node/recipe/dashboard";
import UserRoles from "supertokens-node/recipe/userroles";
import ThirdParty from "supertokens-node/recipe/thirdparty";
import type { TypeInput } from "supertokens-node/types";

import {
  API_PORT,
  BACKEND_BASE_URL,
  FRONTEND_BASE_URL,
  GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  WEBSITE_PORT,
} from "lib/env.js";

export function getApiDomain() {
  const apiPort = API_PORT;
  const apiBaseUrl = BACKEND_BASE_URL;
  const apiUrl = `${apiBaseUrl}:${apiPort}`;
  return apiUrl;
}

export function getWebsiteDomain() {
  const websitePort = WEBSITE_PORT;
  const websiteBaseUrl = FRONTEND_BASE_URL;
  const websiteUrl = `${websiteBaseUrl}:${websitePort}`;
  return websiteUrl;
}

export const SuperTokensConfig: TypeInput = {
  framework: "express",
  supertokens: {
    connectionURI: "https://try.supertokens.com",
  },
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
        // We have provided you with development keys which you can use for testing.
        // IMPORTANT: Please replace them with your own OAuth keys for production use.
        providers: [
          {
            config: {
              thirdPartyId: "google",
              clients: [
                {
                  clientId: GOOGLE_CLIENT_ID!,
                  clientSecret: GOOGLE_CLIENT_SECRET,
                  scope: ["openid", "email", "profile"]
                },
              ],
            },
          },
          {
            config: {
              thirdPartyId: "github",
              clients: [
                {
                  clientId: GITHUB_CLIENT_ID!,
                  clientSecret: GITHUB_CLIENT_SECRET,
                  scope: ["read:user", "user:email"]
                },
              ],
            },
          }
        ],
      },
    }),
    Passwordless.init({
      contactMethod: "EMAIL",
      flowType: "USER_INPUT_CODE_AND_MAGIC_LINK",
    }),
    Dashboard.init(),
    UserRoles.init(),
    Session.init(),
  ],
};
