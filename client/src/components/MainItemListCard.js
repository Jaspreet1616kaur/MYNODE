import { React, useContext, useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { getToken } from "../utils/getToken";
import { AppContext } from "../context/appContext";

function MainItemListCard({ item }) {
  const { getProfile, userProfile } = useContext(AppContext);

  const [updatedMuseumData, setUpdatedMuseumData] = useState(null);
  const [updatedComments, setUpdatedComments] = useState({});
  const [showUpdateForm, setShowUpdateForm] = useState(true);
  const [commentsData, setCommentsData] = useState(null);
  const [allComments, setAllComments] = useState(null);

  const token = getToken();
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  const museumId = item._id;

  useEffect(() => {
    getProfile();
  }, []);
  const handleUpdateMuseumClick = () => {
    setShowUpdateForm((prev) => !prev);
  };

  const handleChangeHandler = (e) => {
    setUpdatedMuseumData({
      ...updatedMuseumData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdateComments = (e) => {
    setUpdatedComments({
      ...updatedComments,
      [e.target.name]: e.target.value,
    });
  };

  const getComments = async () => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await fetch(
        `http://localhost:5001/api/comments/getSpecificComments/${museumId}`,
        requestOptions
      );
      console.log("response", response);
      const result = await response.json();
      console.log("result: ", result);
      setCommentsData(result.singleComments);
      console.log("result: ", result.singleComments);
    } catch (error) {
      console.log("error getting  comments: ", error);
    }
  };
  useEffect(() => {
    getComments();
  }, []);

  const getAllComments = async () => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await fetch(
        ` http://localhost:5001/api/comments/allComments`,
        requestOptions
      );

      const result = await response.json();
      setAllComments(result.allComments);
      console.log("result.allComments: ", result);
    } catch (error) {
      console.log("error getting  comments: ", error);
    }
  };
  useEffect(() => {
    getAllComments();
  }, []);

  //NOTE 2nd) Create state variable for the modifed data
  //NOTE 3rd) Create function to SET the modified data state variable
  //NOTE 4th) Create function to : A) append all the modified data to the request, B) do the fetch request to api/museums /updateMuseum
  const updatedMuseum = async (e) => {
    console.log("updatedMuseumData", updatedMuseumData);
    console.log("item.id", item.id);

    e.preventDefault();
    let urlencoded = new URLSearchParams();
    urlencoded.append("type", updatedMuseumData.type);
    urlencoded.append("id", item._id);
    urlencoded.append("name", updatedMuseumData.name);
    urlencoded.append("price", updatedMuseumData.price);

    var requestOptions = {
      method: "PUT",
      body: urlencoded,
    };
    console.log("requestOptions.body", requestOptions.body);
    try {
      const response = await fetch(
        "http://localhost:5001/api/museums/updateMuseum",
        requestOptions
      );
      const results = await response.json();
      console.log("uploading successful", results);
    } catch (error) {
      console.log("museum not  upload succcessfullly", error);
    }
  };
  // /here a create varibalre for comments option
  const postComment = async (e) => {
    e.preventDefault();
    console.log("updatedComments", updatedComments);
    console.log("item._id", item._id);

    var requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        commentText: updatedComments.commentsText,
        userName: updatedComments.userName,
        avatarPicture: updatedComments.avatarPicture,
        museumId: museumId,
      }),
    };

    try {
      const response = await fetch(
        "http://localhost:5001/api/comments",
        requestOptions
      );
      const results = await response.json();
      console.log("results", results);
      setUpdatedComments(results.savedComment);
    } catch (error) {
      console.log("error fetching", error);
    }
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
          {item.avatarPicture && <img src={item.avatarPicture} height={200} />}
          {item && <p>{item.type}</p>}
          {item && <p>{item.price}</p>}
          {item && <p>{item.name}</p>}
        </Typography>
        <div>
          {allComments &&
            allComments.map((comment, i) => {
              return (
                <li>
                  {comment.commentText} key{i}
                </li>
              );
            })}
        </div>
      </CardContent>
      <Button onClick={handleUpdateMuseumClick}>Show More</Button>

      {!showUpdateForm && (
        <form onSubmit={updatedMuseum}>
          <label htmlFor="updatedMuseum">
            <h1>Update Museum</h1>
          </label>
          <input
            type="text"
            placeholder="name "
            value={updatedMuseumData?.name ? updatedMuseumData.name : ""}
            onChange={handleChangeHandler}
            name="name"
          />

          <input
            type="text"
            placeholder="price"
            value={updatedMuseumData?.price ? updatedMuseumData.price : ""}
            onChange={handleChangeHandler}
            name="price"
          />

          <input
            type="text"
            placeholder="type"
            value={updatedMuseumData?.type ? updatedMuseumData.type : ""}
            onChange={handleChangeHandler}
            name="type"
          />

          <button type="updatedMuseum">Click to submit</button>
          <label htmlFor="updatedComments">
            <h1>Comments</h1>
          </label>
          <input
            type="text"
            placeholder="commentsText "
            value={
              updatedComments?.commentsText ? updatedComments.commentsText : ""
            }
            onChange={handleUpdateComments}
            name="commentsText"
          />

          <input
            type="text"
            placeholder="userName "
            value={updatedComments?.userName ? updatedComments.userName : ""}
            onChange={handleUpdateComments}
            name="userName"
          />
          <button type="button" onClick={postComment}>
            submit
          </button>
        </form>
      )}
    </Card>
  );
}

export default MainItemListCard;
