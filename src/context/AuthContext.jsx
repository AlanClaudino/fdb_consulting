import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../Firebase';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

const UserContext = createContext({});

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
  return useContext(UserContext);
};

// eslint-disable-next-line react/prop-types
const AuthContext = ({ children }) => {
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const signin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signup = (email, password) => {
    console.log('SIGNUP');
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signout = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <UserContext.Provider value={{ user, signin, signout, signup }}>
      {!isLoading && children}
    </UserContext.Provider>
  );
};

export default AuthContext;
