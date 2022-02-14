import { createContext, ReactNode, useContext } from 'react';

// eslint-disable-next-line no-undef
const UserContext = createContext<Partial<UserProviderProps>>({});
// eslint-disable-next-line no-undef
export const useUserContext = (): Partial<UserProviderProps> =>
  useContext(UserContext);

export const UserProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const userDetails = () => {};

  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
};

export default UserProvider;
