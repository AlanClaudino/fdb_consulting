import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../Firebase';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updateProfile,
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

  const update = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo);
  };

  const signin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signout = () => {
    signOut(auth);
  };

  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <UserContext.Provider
      value={{ user, signin, signout, signup, resetPassword, update }}
    >
      {!isLoading && children}
    </UserContext.Provider>
  );
};

export default AuthContext;
