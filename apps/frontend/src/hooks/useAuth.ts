import { useEffect, useState } from "react";
import { useSessionContext } from "supertokens-auth-react/recipe/session";
import { getApiDomain } from "../lib/supertokens";

export interface ISessionInfo {
  sessionHandle: string;
  userId: string;
  accessTokenPayload: string;
}

export default function useAuth() {
  const session = useSessionContext();

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [userSession, setUserSession] = useState<ISessionInfo | null>(null);

  useEffect(() => {
    const getSessionInfo = async () => {
      try {
        const response = await fetch(getApiDomain() + "/sessioninfo", {
          credentials: "include",
        });
        const data = await response.json();
        setUserSession(data);
      } catch (error) {
        console.error("Error fetching session info:", error);
        window.alert("Error calling API: " + error);
      }
    };

    if (!session.loading) {
      setIsLoading(false);
      setIsAuthenticated(session.doesSessionExist);

      if (session.doesSessionExist) {
        getSessionInfo();
      } else {
        setUserSession(null);
      }
    }
  }, [session]);

  return {
    isAuthenticated,
    isLoading,
    userSession,
  };
}
