import React, { useState } from "react";
import { getToken } from "../utils/getToken";

function Profile() {
  const [userProfile, setUserProfile] = useState(null);
  const [error, setError] = useState(null);
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
    <>
      <h2>User Profile</h2>
      <button onClick={getProfile}>getProfile</button>
      {userProfile && (
        <div>
          <h1>{userProfile.userName}</h1>
          <h1>{userProfile.email}</h1>
          <img src={userProfile.avatarPicture} alt="" width={100} />
        </div>
      )}
    </>
  );
}

export default Profile;
