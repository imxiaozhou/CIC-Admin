import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode
} from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import oktaConfig from '@/config/oktaConfig';

export const oktaAuth = new OktaAuth(oktaConfig.oidc);

interface AuthContextType {
  isAuthenticated: boolean;
  user: any;
  username: string;
  signIn: () => void;
  signOut: () => Promise<void>;
}

const authContext = createContext<AuthContextType | undefined>(undefined);

interface ProvideAuthProps {
  children: ReactNode;
}

export const ProvideAuth: React.FC<ProvideAuthProps> = ({ children }) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(authContext);
  if (!context) {
    throw new Error('useAuth must be used within a ProvideAuth');
  }
  return context;
};

const useProvideAuth = () => {
  const { authState } = useOktaAuth();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [username, setUserName] = useState<string>('');
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    if (!authState || !authState.isAuthenticated) return;
    oktaAuth.token
      .getUserInfo()
      .then((userInfo: any) => {
        setUser(userInfo);
        setUserName(userInfo.name);
        setIsAuthenticated(true);
      })
      .catch((error) => {
        console.error('Error fetching user info:', error);
      });
  }, [authState]);

  const signIn = () => {
    const originalUri = toRelativeUrl(
      window.location.href,
      window.location.origin
    );
    oktaAuth.setOriginalUri(originalUri);
    oktaAuth.signInWithRedirect();
  };

  const signOut = async () => {
    await oktaAuth.signOut();
    setUser(null);
    setIsAuthenticated(false);
  };

  return {
    isAuthenticated,
    user,
    username,
    signIn,
    signOut
  };
};
