import React, { useState } from "react";
function PostMuseum() {
  const [newMuseum, setNewMuseum] = useState({});

  const handleChangeHandler = (e) => {
    console.log("e.target.name", e.target.name);
    console.log("e.target.name", e.target.value);

    setNewMuseum({ ...newMuseum, [e.target.name]: e.target.value });
  };

  console.log("NewMuseum", newMuseum);

  const addMuseum = async (e) => {
    var urlencoded = new URLSearchParams();
    urlencoded.append("name", "louvre");
    urlencoded.append("price", "20");
    urlencoded.append("type", "art");

    var requestOptions = {
      method: "POST",
      body: urlencoded,
    };
    try {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Hello  i am running");
  };

  return (
    <div>
      <input value={onchange}></input>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="add"
          value={newMuseum.name}
          onChange={handleChangeHandler}
          name="name"
        />
        <button type="submit">Click to submit</button>
      </form>
    </div>
  );
}
export default PostMuseum;
