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
// eslint-disable-next-line no-undef
interface ProviderProps extends AuthProviderProps {
  user: User | null;
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
  const [authLoading, setAuthLoading] = useState<boolean>(false);

  useEffect(() => {
    setAuthLoading(true);
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
  }, []);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    return auth.onAuthStateChanged(async (newUser) => {
      setUser(newUser);
      setAuthLoading(false);
    });
  }, []);

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

  const logOut = async () => {
    await auth.signOut();
    setUserSignedOut(true);
  };

  const value = {
    user,
    userData,
    userSignedOut,
    getUserData,
    addUser,
    signInWithFacebook,
    logOut,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
