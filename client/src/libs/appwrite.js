import { Client, Account, OAuthProvider } from "appwrite";

const client = new Client();
client
  .setEndpoint(import.meta.APPWRITE_API_ENDPOINT)
  .setProject(import.meta.APPWRITE_PROJECT_ID);

const account = new Account(client);
account.createOAuth2Session(
  OAuthProvider.Google,
  `${import.meta.BASE_URL}/success`,
  `${import.meta.BASE_URL}/failed`,
);
