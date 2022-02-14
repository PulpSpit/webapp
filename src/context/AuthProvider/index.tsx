import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import {
  User,
  getRedirectResult,
  signInWithRedirect,
  FacebookAuthProvider,
} from 'firebase/auth';
import { auth, facebookAuthProvider } from 'firebase';
import axios from 'axios';
import {
  SCOPE_USER_EMAIL,
  SCOPE_USER_FRIEND,
  SCOPE_USER_GENDER,
  SCOPE_USER_PUBLIC_PROFILE,
} from 'constant';

interface ProviderProps {
  user: User;
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
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        if (result) {
          const credential = FacebookAuthProvider.credentialFromResult(result);
          auth.currentUser?.getIdToken(true).then((res) => {
            axios
              .request({
                url: 'http://localhost:8080/users',
                method: 'post',
                headers: {
                  authtoken: res,
                  facebookaccesstoken: credential?.accessToken as string,
                },
              })
              .then((ress) => {
                console.log(ress);
                axios
                  .request({
                    url: 'http://localhost:8080/users',
                    method: 'get',
                    headers: {
                      authtoken: res,
                    },
                  })
                  .then((resss) => {
                    console.log(resss.data);
                  });
              })
              .catch((err) => {
                console.log(err);
              });
          });
        }
      })
      .catch((e) => {
        console.log(e);
      });
  });

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    return auth.onAuthStateChanged(async (newUser) => {
      setUser(newUser);
      console.log(newUser);
    });
  });

  const signInWithFacebook = () => {
    facebookAuthProvider.addScope(SCOPE_USER_FRIEND);
    facebookAuthProvider.addScope(SCOPE_USER_GENDER);
    facebookAuthProvider.addScope(SCOPE_USER_EMAIL);
    facebookAuthProvider.addScope(SCOPE_USER_PUBLIC_PROFILE);
    signInWithRedirect(auth, facebookAuthProvider);
  };
  // const userData = () => {
  //   auth.currentUser?.getIdToken(true).then((token) => {
  //     axios({
  //       baseURL: 'https://funny-hound-92.loca.lt',
  //       url: '/users',
  //       method: 'GET',
  //       headers: {
  //         authToken: token,
  //       },
  //     })
  //       .then((data) => console.log(data))
  //       .catch((e) => console.log(e));
  //   });
  // };

  const value = {
    signInWithFacebook,
    // userData,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
