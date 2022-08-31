import React, { createContext, useEffect, useState } from "react";
import { getToken, removeToken } from "../utils/getToken";
export const AutenticationContext = createContext();

export const AutenticationContextProvider = (props) => {
  const [user, setUser] = useState(false);

  const isUserLoggedIn = () => {
    const token = getToken();
    if (token) {
      setUser(true);
      console.log("you are ALREADY logged in");
    } else {
      setUser(false);
      console.log("you are NOT logged in");
    }
  };

  useEffect(() => {
    isUserLoggedIn();
    // console.log(user);
  }, [user]);

  const logoutSomething = () => {
    removeToken();
  };

  return (
    <AutenticationContext.Provider value={(isUserLoggedIn, logoutSomething)}>
      {props.children}
    </AutenticationContext.Provider>
  );
};
