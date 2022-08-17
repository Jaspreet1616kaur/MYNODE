import { useSlotProps } from "@mui/base";
import React, { createContext, useState } from "react";

export const AutenticationContext = createContext();

export const AutenticationContextProvider = (props) => {
  const [isDataLoading, setIsDataLoading] = useState();
  const [isUserLoggedIn, setIsUserLoggedIn] = useState();
  const [whoIsUser, setWhoisUser] = useState();

  return (
    <AutenticationContext.Provider
      value={(isDataLoading, isUserLoggedIn, whoIsUser)}
    >
      {props.children}
    </AutenticationContext.Provider>
  );
};
