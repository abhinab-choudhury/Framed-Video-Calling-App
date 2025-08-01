import { PasswordlessComponentsOverrideProvider } from "supertokens-auth-react/recipe/passwordless";
import { PasswordlessPreBuiltUI } from "supertokens-auth-react/recipe/passwordless/prebuiltui";
import { ThirdPartyPreBuiltUI } from "supertokens-auth-react/recipe/thirdparty/prebuiltui";

type PasswordlessUserInputCodeFormFooterProps = {
  DefaultComponent: React.ComponentType;
  loginAttemptInfo: {
    contactMethod: "EMAIL" | "PHONE" | "EMAIL_OR_PHONE";
  };
};

export const PreBuiltUIList = [PasswordlessPreBuiltUI, ThirdPartyPreBuiltUI];

export const ComponentWrapper = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  return (
    <PasswordlessComponentsOverrideProvider
      components={{
        PasswordlessUserInputCodeFormFooter_Override: (
          props: PasswordlessUserInputCodeFormFooterProps,
        ) => {
          const { DefaultComponent, loginAttemptInfo, ...rest } = props;
          const showQuotaMessage = loginAttemptInfo.contactMethod === "PHONE";

          return (
            <div style={{ width: "100%" }}>
              <DefaultComponent {...rest} />
              {showQuotaMessage && (
                <div
                  style={{
                    width: "100%",
                    padding: "6px 12px",
                    borderRadius: 4,
                    backgroundColor: "#EF9A9A",
                    fontSize: 12,
                    textAlign: "start",
                    fontWeight: "bold",
                    lineHeight: "18px",
                  }}
                >
                  You've reached the quota for phone logins.
                </div>
              )}
            </div>
          );
        },
      }}
    >
      {children}
    </PasswordlessComponentsOverrideProvider>
  );
};
