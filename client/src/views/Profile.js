import { Card } from "@mui/material";
import React, { useContext } from "react";

import { AppContext } from "../context/appContext";

function Profile() {
  const { getProfile, userProfile } = useContext(AppContext);

  return (
    <>
      <h1>User Profile Information </h1>

      <h2>User Profile</h2>
      <button onClick={getProfile}>getProfile</button>
      {userProfile && (
        <div>
          <Card>
            <h1>UserName: {userProfile.userName}</h1>
            <h1>UserEmail: {userProfile.email}</h1>
            <img src={userProfile.avatarPicture} alt="" width={100} />
          </Card>
        </div>
      )}
    </>
  );
}

export default Profile;
