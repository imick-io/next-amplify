"use client";

import { Authenticator } from "@aws-amplify/ui-react";
import { FC, PropsWithChildren } from "react";
import "@aws-amplify/ui-react/styles.css";

const ProviderAuth: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div>
          {JSON.stringify(user)}
          <button onClick={signOut}>Sign out</button>

          {children}
        </div>
      )}
    </Authenticator>
  );
};

export default ProviderAuth;
