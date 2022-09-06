import React, { useContext, useState } from "react";
import { AppContext } from "../context/appContext";

function Profile() {
  const { getProfile, userProfile } = useContext(AppContext);

  return (
    <>
      <h2>User Profile</h2>
      <button onClick={getProfile}>getProfile</button>
      {userProfile && (
        <div>
          <h1>UserName::{userProfile.userName}</h1>
          <h1>UserEmail::{userProfile.email}</h1>
          <img src={userProfile.avatarPicture} alt="" width={100} />
        </div>
      )}
    </>
  );
}

export default Profile;
