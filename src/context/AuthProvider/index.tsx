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
  getAdditionalUserInfo,
  signInWithRedirect,
  FacebookAuthProvider,
} from 'firebase/auth';
import { auth, facebookAuthProvider } from 'firebase';
import {
  SCOPE_USER_EMAIL,
  SCOPE_USER_FRIEND,
  SCOPE_USER_GENDER,
  SCOPE_USER_PUBLIC_PROFILE,
} from 'constant';
import { BackendService } from 'services/BackendService';

interface ProviderProps {
  user: User | null;
  userData: any;
  userSignedOut: boolean;
  getUserData: () => void;
  addUser: (token: string) => void;
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
  const [userData, setUserData] = useState(null);
  const [userSignedOut, setUserSignedOut] = useState<boolean>(false);

  useEffect(() => {
    getRedirectResult(auth)
      .then(async (result) => {
        if (!result) return;
        const { accessToken } =
          FacebookAuthProvider.credentialFromResult(result)!;
        const { isNewUser } = getAdditionalUserInfo(result)!;
        if (isNewUser) await addUser(accessToken as string);
        await getUserData();
      })
      .catch((err) => {
        console.log(err);
      });
  });

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    return auth.onAuthStateChanged(async (newUser) => {
      setUser(newUser);
    });
  });

  const signInWithFacebook = () => {
    facebookAuthProvider.addScope(SCOPE_USER_FRIEND);
    facebookAuthProvider.addScope(SCOPE_USER_GENDER);
    facebookAuthProvider.addScope(SCOPE_USER_EMAIL);
    facebookAuthProvider.addScope(SCOPE_USER_PUBLIC_PROFILE);
    signInWithRedirect(auth, facebookAuthProvider).catch((err) => {
      console.log(err);
    });
  };

  const getUserData = async () => {
    const response = await BackendService.getUser().catch((err) => {
      console.log(err);
    });
    if (!response) return;
    setUserData(response.data);
  };

  const addUser = async (facebookAccessToken: string) =>
    BackendService.addUser(facebookAccessToken).catch((err) => {
      console.log(err);
    });

  const value = {
    user,
    userData,
    userSignedOut,
    getUserData,
    addUser,
    signInWithFacebook,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
