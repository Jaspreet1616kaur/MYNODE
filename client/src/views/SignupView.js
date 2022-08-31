import React from "react";
import { useState } from "react";

function SignupView() {
  //1st  create state for the file that will be uploaded and the JSX elements with the event handlers
  //this state variable for images
  const [selectedData, setSelectedData] = useState(null);

  const [newUser, setNewUser] = useState({});

  // Create on event handler function for the 3 events OR create one event handle function for each of them
  const handleChangeHandler = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const attachFileHandler = (e) => {
    setSelectedData(e.target.files[0]);
  };

  // .2 Define submit function
  const submitForm = async (e) => {
    e.preventDefault();
    // call  FormData object constructor to populate with pairs of key/values (in this case {image: "our file"} )
    const formData = new FormData();
    // console.log("selectedData", selectedData);
    formData.append("image", selectedData);
    // console.log("formData :>> ", formData);

    // compose the object with the options to be sent with our request, including the type of method, and use the body of the request to attach data

    const requestOptions = {
      method: "Post",
      body: formData,
    };

    try {
      const response = await fetch(
        "http://localhost:5001/api/users/imageUpload",
        requestOptions
      );
      const result = await response.json();
      // console.log("result", result);
      setNewUser({ ...newUser, avatarPicture: result.imageUrl }); // imageURL is how the field is defined in usersController.
    } catch (error) {}
  };

  //] 26. Create signUp function
  const signUp = async () => {
    //verify all necessary fields are filled
    // verify email / password length and strength with Regex

    //check code in Postman to see how composes the object that is sent in request's body
    let urlencoded = new URLSearchParams();
    urlencoded.append("userName", newUser.userName);
    urlencoded.append("email", newUser.email);
    urlencoded.append("password", newUser.password);
    urlencoded.append("avatarPicture", newUser.avatarPicture);
    var requestOptions = {
      method: "POST",
      body: urlencoded,
    };
    console.log("requestOptions.body", requestOptions.body);
    try {
      const response = await fetch(
        "http://localhost:5001/api/users/signup",
        requestOptions
      );
      const results = await response.json();
      // console.log("results", results);
    } catch (error) {
      console.log("error fetching", error);
    }
  };

  return (
    <div>
      <h1>User Registration and File Upload</h1>
      <div>
        <img width="100" src={newUser.avatarPicture} />
      </div>
      <div className="container">
        {/* // 24. create input fields for username, email and password.Using same handler function */}
        <div>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={newUser.userName ? newUser.userName : ""}
            name="userName"
            onChange={handleChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            value={newUser.email ? newUser.email : ""}
            onChange={handleChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            id="password"
            value={newUser.password ? newUser.password : ""}
            onChange={handleChangeHandler}
          />
        </div>
        {/* 13.1 create form element with input and button to submit the form */}
        <form>
          <input type="file" onChange={attachFileHandler} />
          <button onClick={submitForm}>Upload Picture</button>
        </form>
      </div>
      <button onClick={signUp}>Signup</button>
    </div>
  );
}

export default SignupView;
