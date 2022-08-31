// import { keyframes } from "@emotion/react";
import React, { createContext, useState } from "react";
import { useEffect } from "react";

const AppContext = createContext();

const AppContextProvider = (props) => {
  //this is for user loggin
  const [isDataLoading, setIsDataLoading] = useState();
  const [myItem, setMyItem] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5001/api/museums/all");
      const result = await response.json();
      setMyItem(result);
      setIsDataLoading(false);
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  // console.log("myItem: ", myItem);

  return (
    <AppContext.Provider
      value={{
        myItem,
        setError,
        setIsDataLoading,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
