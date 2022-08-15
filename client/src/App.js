import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const myFetch = () => {
    fetch("http://localhost:5001/api/museums/all", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    myFetch();
  }, []);

  return (
    <div className="App">
      <h1>landing page</h1>
    </div>
  );
}

export default App;
