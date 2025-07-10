"use client";

import Passwordless, {
  PasswordlessComponentsOverrideProvider,
} from "supertokens-auth-react/recipe/passwordless";
import { PasswordlessPreBuiltUI } from "supertokens-auth-react/recipe/passwordless/prebuiltui";
import Session from "supertokens-auth-react/recipe/session";
import { API_PORT, BACKEND_BASE_URL, FRONTEND_BASE_URL, VITE_ENV, WEBSITE_PORT } from "./lib/env";
import ThirdParty, { Github, Google } from "supertokens-auth-react/recipe/thirdparty";
import { ThirdPartyPreBuiltUI } from 'supertokens-auth-react/recipe/thirdparty/prebuiltui';

// eslint-disable-next-line react-refresh/only-export-components
export function getApiDomain() {
  const apiPort = API_PORT;
  const apiBaseUrl = BACKEND_BASE_URL
  const apiUrl = `${apiBaseUrl}:${apiPort}`;
  return apiUrl;
}

// eslint-disable-next-line react-refresh/only-export-components
export function getWebsiteDomain() {
  const websitePort = WEBSITE_PORT;
  const websiteBaseUrl = FRONTEND_BASE_URL;
  const websiteUrl = `${websiteBaseUrl}:${websitePort}`;
  return websiteUrl;
}

export const styleOverride = `
[data-supertokens~=tenants-link] {
    margin-top: 8px;
}
`;

// eslint-disable-next-line react-refresh/only-export-components
export const SuperTokensConfig = {
  appInfo: {
    appName: "Framer",
    apiDomain: VITE_ENV === "production" ? window.location.origin : getApiDomain(),
    websiteDomain: VITE_ENV === "production" ? window.location.origin : getWebsiteDomain(),
    apiBasePath: "/auth",
    websiteBasePath: "/auth",
  },
  style: styleOverride,

  recipeList: [
    ThirdParty.init({
      signInAndUpFeature: {
        providers: [
          Github.init(),
          Google.init(),
        ]
      }
    }),
    Passwordless.init({
      contactMethod: "EMAIL",
    }),
    Session.init(),
  ],
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getRedirectionURL: async (context: any) => {
    if (context.action === "SUCCESS") {
      return "/dashboard";
    }
    return undefined;
  },
};

// eslint-disable-next-line react-refresh/only-export-components
export const recipeDetails = {
  docsLink: "https://supertokens.com/docs/quickstart/introduction",
};

// eslint-disable-next-line react-refresh/only-export-components
export const PreBuiltUIList = [PasswordlessPreBuiltUI, ThirdPartyPreBuiltUI];

export const ComponentWrapper = (props: {
  children: JSX.Element;
}): JSX.Element => {
  let childrenToRender = props.children;

  childrenToRender = (
    <PasswordlessComponentsOverrideProvider
      components={{
        PasswordlessUserInputCodeFormFooter_Override: ({
          DefaultComponent,
          ...cProps
        }) => {
          const loginAttemptInfo = cProps.loginAttemptInfo;
          let showQuotaMessage = false;

          if (loginAttemptInfo.contactMethod === "PHONE") {
            showQuotaMessage = true;
          }

          return (
            <div
              style={{
                width: "100%",
              }}
            >
              <DefaultComponent {...cProps} />
              {showQuotaMessage && (
                <div
                  style={{
                    width: "100%",
                    paddingLeft: 12,
                    paddingRight: 12,
                    paddingTop: 6,
                    paddingBottom: 6,
                    borderRadius: 4,
                    backgroundColor: "#EF9A9A",
                    margin: 0,
                    boxSizing: "border-box",
                    MozBoxSizing: "border-box",
                    WebkitBoxSizing: "border-box",
                    fontSize: 12,
                    textAlign: "start",
                    fontWeight: "bold",
                    lineHeight: "18px",
                  }}
                >
                  There is a daily quota for the free SMS service, if you do not
                  receive the SMS please try again tomorrow.
                </div>
              )}
            </div>
          );
        },
      }}
    >
      {props.children}
    </PasswordlessComponentsOverrideProvider>
  );
  return childrenToRender;
};
