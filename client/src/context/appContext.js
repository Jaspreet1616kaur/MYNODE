// import { keyframes } from "@emotion/react";
import React, { createContext, useState } from "react";
import { useEffect } from "react";
import { getToken } from "../utils/getToken";

const AppContext = createContext();

const AppContextProvider = (props) => {
  //this is for user loggin
  const [isDataLoading, setIsDataLoading] = useState();
  const [myItem, setMyItem] = useState(null);
  const [error, setError] = useState(null);

  const [userProfile, setUserProfile] = useState(null);
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

  const getProfile = async () => {
    const token = getToken();
    if (token) {
      const myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${token}`);

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
      };
      try {
        const response = await fetch(
          "http://localhost:5001/api/users/profile",
          requestOptions
        );
        const result = await response.json();
        setUserProfile({
          email: result.email,
          userName: result.userName,
          avatarPicture: result.avatarPicture,
        });
      } catch (error) {
        console.log("error getting profile", error);
        setError("you need login first");
      }
    }
  };

  return (
    <AppContext.Provider
      value={{
        myItem,
        setError,
        setIsDataLoading,
        getProfile,
        userProfile,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
