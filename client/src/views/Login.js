import React, { useState } from "react";
import "./Login.css";
function Login() {
  const [userLogin, setUserLogin] = useState({});

  const handleChangeHandler = (e) => {
    setUserLogin({ ...userLogin, [e.target.name]: e.target.value });
  };
  const login = async (e) => {
    //for form
    e.preventDefault();
    const urlencoded = new URLSearchParams();
    urlencoded.append("email", userLogin.email);
    urlencoded.append("password", userLogin.password);

    var requestOptions = {
      method: "POST",
      body: urlencoded,
    };
    try {
      const response = await fetch(
        "http://localhost:5001/api/users/login",
        requestOptions
      );
      const result = await response.json();
      const { token, user } = result;
      console.log("logging successful", result);
      if (token) {
        localStorage.setItem("token", token);
      }
    } catch (error) {
      console.log("error during Login :>> ", error);
    }
  };

  return (
    <div>
      <form>
        <div class="container">
          <label for="email">
            <b>E mail</b>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            value={userLogin.email ? userLogin.email : ""}
            onChange={handleChangeHandler}
            name="email"
          />

          <label for="psw">
            <b>Password</b>
          </label>
          <input
            type="text"
            placeholder="Enter Password"
            name="password"
            value={userLogin.password ? userLogin.password : ""}
            onChange={handleChangeHandler}
          />

          <button onClick={login}>Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
