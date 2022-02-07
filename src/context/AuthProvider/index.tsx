import { createContext, ReactNode, useContext, useEffect } from 'react';
import firebase from 'firebase/compat';
import { getRedirectResult, signInWithRedirect } from 'firebase/auth';
import { auth, facebookAuthProvider } from 'firebase';

interface ProviderProps {
  user: firebase.User;
  signInWithFacebook: () => void;
}

const AuthContext = createContext<Partial<ProviderProps>>({});

export const useAuthContext = (): Partial<ProviderProps> =>
  useContext(AuthContext);

export const AuthProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  useEffect(() => {
    getRedirectResult(auth).then((result) => {
      console.log(result);
    });
  });

  const signInWithFacebook = () => {
    signInWithRedirect(auth, facebookAuthProvider);
  };

  const value = { signInWithFacebook };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
