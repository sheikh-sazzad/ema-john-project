import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { createContext } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {
  const { user, setUser } = useState(null);

  const createUser = (email, passport) => {
    return createUserWithEmailAndPassword(auth, email, passport);
  };

  const authInfo = { user, createUser };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default UserContext;
