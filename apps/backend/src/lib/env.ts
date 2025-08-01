import "dotenv/config";

function getEnv(
  name: string,
  isRequired: boolean = false,
  defaultValue?: string,
): string | undefined {
  const value = process.env[name] || defaultValue;
  if (isRequired && !process.env[name]) {
    throw new Error(`Environment variable "${name}" is required but not set.`);
  }
  return value;
}

export const PORT = getEnv("PORT", true);
export const BACKEND_BASE_URL = getEnv("BACKEND_BASE_URL", true);
export const FRONTEND_BASE_URL = getEnv("FRONTEND_BASE_URL", true);

export const GOOGLE_CLIENT_ID = getEnv("GOOGLE_CLIENT_ID", true);
export const GOOGLE_CLIENT_SECRET = getEnv("GOOGLE_CLIENT_SECRET", true);
export const GITHUB_CLIENT_ID = getEnv("GITHUB_CLIENT_ID", true);
export const GITHUB_CLIENT_SECRET = getEnv("GITHUB_CLIENT_SECRET", true);

export const AGORA_APP_ID = getEnv("AGORA_APP_ID", true);
export const AGORA_APP_PRIMARY_CERTIFICATE = getEnv(
  "AGORA_APP_PRIMARY_CERTIFICATE",
  true,
);

export const SUPERTOKENS_CONNECTION_URI = getEnv(
  "SUPERTOKENS_CONNECTION_URI",
  true,
);
export const SUPERTOKENS_API_KEY = getEnv("SUPERTOKENS_API_KEY", true);
