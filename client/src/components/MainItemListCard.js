import { React, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function MainItemListCard({ item }) {
  const [updatedMuseumData, setUpdatedMuseumData] = useState(null);

  const handleChangeHandler = (e) => {
    setUpdatedMuseumData({
      ...updatedMuseumData,
      [e.target.name]: e.target.value,
    });
  };

  //NOTE 2nd) Create state variable for the modifed data
  //NOTE 3rd) Create function to SET the modified data state variable
  //NOTE 4th) Create function to : A) append all the modified data to the request, B) do the fetch request to api/museums /updateMuseum
  const updatedMuseum = async (e) => {
    console.log("updatedMuseumData", updatedMuseumData);
    console.log("item._id", item._id);
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
      // console.log("results", results);
    } catch (error) {
      console.log("error fetching", error);
    }
  };

  // console.log("item: ", item);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
          {item.avatarPicture && <img src={item.avatarPicture} height={200} />}
          {item && <p>{item.type}</p>}
          {item && <p>{item.price}</p>}
        </Typography>
      </CardContent>

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
      </form>

      {/* NOTE 1st) create input fields, to modify data (input field for Name, for price, for type). Create button to call the funtion to modify */}
    </Card>
  );
}
export default MainItemListCard;
