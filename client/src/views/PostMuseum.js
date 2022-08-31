import React, { useState } from "react";
function PostMuseum() {
  const [newMuseum, setNewMuseum] = useState({});
  //NOTE Create a state variable to store the information of the image
  const [uploadPicture, setUploadPicture] = useState({});

  const handleChangeHandler = (e) => {
    // console.log("e.target.name", e.target.name);
    // console.log("e.target.name", e.target.value);

    setNewMuseum({ ...newMuseum, [e.target.name]: e.target.value });
  };
  const attachFileHandler = (e) => {
    setUploadPicture(e.target.files[0]);
  };
  // console.log("NewMuseum", newMuseum);

  const addMuseum = async (e) => {
    e.preventDefault();
    const uploadPicture = await imageUpload();
    // console.log("uploadPicture", uploadPicture);
    const urlencoded = new URLSearchParams();
    // console.log("newMuseum.name", newMuseum.name);
    // console.log("newMuseum.avatarPicture", newMuseum.avatarPicture);

    urlencoded.append("name", newMuseum.name);
    urlencoded.append("price", newMuseum.price);
    urlencoded.append("type", newMuseum.type);
    urlencoded.append("avatarPicture", newMuseum.avatarPicture);

    const requestOptions = {
      method: "POST",
      body: urlencoded,
    };
    try {
      console.log("posting new museum now");

      const response = await fetch(
        "http://localhost:5001/api/museums/newMuseum",
        requestOptions
      );
      const result = await response.json();

      console.log("Uploading successful", result);
    } catch (error) {
      console.log("error during Uploading :>> ", error);
    }
  };

  // create a state variable to store the input information
  // create the function to update newMuseum with the information that the user types

  //finally create the upload funcion : a fetch function to the endpoint we are using in Postman

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Hello  i am running");
  // };

  //NOTE Create a function to upload Image , "imageUpload" : for image upload
  const imageUpload = async (e) => {
    // e.preventDefault();
    const formData = new FormData();
    console.log("uploadPicture", uploadPicture);
    formData.append("image", uploadPicture);
    console.log("formData :>> ", formData);

    const requestOptions = {
      method: "POST",
      body: formData,
    };
    try {
      const response = await fetch(
        "http://localhost:5001/api/museums/imageUploads",
        requestOptions
      );
      const result = await response.json();
      console.log("result", result);

      setNewMuseum({ ...newMuseum, avatarPicture: result.imageUrl });
    } catch (error) {
      console.log("error uploading picture", error);
    }
  };

  ///////

  return (
    <div>
      <div>
        <img width="100" src={newMuseum.avatarPicture} />
      </div>
      <form onSubmit={addMuseum}>
        <label htmlFor="addMuseum">NewMuseum</label>
        <input
          type="text"
          placeholder="name "
          value={newMuseum.name ? newMuseum.name : ""}
          onChange={handleChangeHandler}
          name="name"
        />

        <input
          type="text"
          placeholder="price"
          value={newMuseum.price ? newMuseum.price : ""}
          onChange={handleChangeHandler}
          name="price"
        />

        <input
          type="text"
          placeholder="type"
          value={newMuseum.type ? newMuseum.type : ""}
          onChange={handleChangeHandler}
          name="type"
        />
        <input type="file" onChange={attachFileHandler} />
        <button type="submit">Click to submit</button>
        {/* <form>
          <button onClick={imageUpload}>Upload Picture</button>
        </form> */}

        {/* NOTE, it would be nice to include the museum city , or city and country */}

        {/* NOTE create input filed of type file , and handle all the logic inside the "imageUpload" function  */}
        {/* NOTE create button with an onclick event to send the image  */}
      </form>
    </div>
  );
}
export default PostMuseum;
