import Passwordless from "supertokens-node/recipe/passwordless";
import Session from "supertokens-node/recipe/session";
import Dashboard from "supertokens-node/recipe/dashboard";
import UserRoles from "supertokens-node/recipe/userroles";
import ThirdParty from "supertokens-node/recipe/thirdparty";
import { API_PORT, BACKEND_BASE_URL, ENV, FRONTEND_BASE_URL, GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, WEBSITE_PORT, } from "./lib/env.js";
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
export const SuperTokensConfig = {
    framework: "express",
    supertokens: {
        connectionURI: "https://try.supertokens.com",
    },
    appInfo: {
        appName: "Framer",
        apiDomain: ENV === "production" ? BACKEND_BASE_URL : getApiDomain(),
        websiteDomain: ENV === "production" ? FRONTEND_BASE_URL : getWebsiteDomain(),
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
                                    clientId: GOOGLE_CLIENT_ID,
                                    clientSecret: GOOGLE_CLIENT_SECRET,
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
                                    clientId: GITHUB_CLIENT_ID,
                                    clientSecret: GITHUB_CLIENT_SECRET,
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
        Dashboard.init(),
        UserRoles.init(),
        Session.init(),
    ],
};
//# sourceMappingURL=config.js.map