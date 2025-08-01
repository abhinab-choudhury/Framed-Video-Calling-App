import Passwordless from "supertokens-node/recipe/passwordless";
import Session from "supertokens-node/recipe/session";
import UserRoles from "supertokens-node/recipe/userroles";
import ThirdParty from "supertokens-node/recipe/thirdparty";
import type { TypeInput } from "supertokens-node/types";

import {
  BACKEND_BASE_URL,
  FRONTEND_BASE_URL,
  GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  SUPERTOKENS_API_KEY,
  SUPERTOKENS_CONNECTION_URI,
} from "./env.js";

export function getApiDomain() {
  const apiUrl = BACKEND_BASE_URL!;
  return apiUrl;
}

export function getWebsiteDomain() {
  const websiteUrl = FRONTEND_BASE_URL!;
  return websiteUrl;
}

export const SuperTokensConfig: TypeInput = {
  framework: "express",
  supertokens: {
    connectionURI: SUPERTOKENS_CONNECTION_URI!,
    apiKey: SUPERTOKENS_API_KEY!,
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
        providers: [
          {
            config: {
              thirdPartyId: "google",
              clients: [
                {
                  clientId: GOOGLE_CLIENT_ID!,
                  clientSecret: GOOGLE_CLIENT_SECRET!,
                  scope: ["openid", "email", "profile"],
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
                  clientSecret: GITHUB_CLIENT_SECRET!,
                  scope: ["read:user", "user:email"],
                },
              ],
            },
          },
        ],
      },
    }),
    Passwordless.init({
      contactMethod: "EMAIL",
      flowType: "USER_INPUT_CODE_AND_MAGIC_LINK",
    }),
    UserRoles.init(),
    Session.init(),
  ],
};
