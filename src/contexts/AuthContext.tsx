import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  User as FirebaseUser,
} from "firebase/auth";
import { auth } from "../configs/firebase";
import { add } from "../configs/firebase/actions";
import { FC, ReactNode, createContext, useContext, useEffect, useState } from "react";

const logIn = async (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password);
  
const logOut = async () => auth.signOut();

const signUp = async (
  email: string,
  password: string,
  firstName: string,
  type: string
) => {
  const userCredentials = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  await add("users", {
    userId: userCredentials.user.uid,
    email,
    firstName,
    type,
  });
};

const userAuthContext = createContext({ user: {}, logIn, logOut, signUp });

export const UserAuthContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<FirebaseUser>({} as FirebaseUser);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser as FirebaseUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider
      value={{
        user,
        logIn,
        logOut,
        signUp,
      }}
    >
      {children}
    </userAuthContext.Provider>
  );
};

export const useUserAuth = () => {

  return useContext(userAuthContext);
};
