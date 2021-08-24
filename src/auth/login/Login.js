import React, { useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../../context/UserContext";
import { ErrShow } from "../../notification/Notification";
import { Link } from "react-router-dom";

const initState = {
  email: "",
  password: "",
  err: "",
  success: false,
};

const Login = () => {
  const [requestUser, setRequest] = useState(initState);
  const { setLoginFunc } = useContext(UserContext);
  //   const [user, setUser] = useReducer(reducer, initStateUser);
  //   let history = useHistory();
  //   console.log(history);
  const { email, password, err } = requestUser;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setRequest({ ...requestUser, [name]: value, err: "", success: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/user/login", { email, password });

      if (!res)
        return setRequest((prevRequestUser) => ({
          ...prevRequestUser,
          err: "User is not already.",
          success: false,
        }));

      //   const resUser = await axios.get("/posts", {
      //     headers: { "auth-token": res.data.accessToken },
      //   });

      //   if (!resUser)
      //     return setRequest((prevRequestUser) => ({
      //       ...prevRequestUser,
      //       err: "User is not already.",
      //       success: false,
      //     }));
      //   console.log(resUser.data);
      //   dispatch({
      //     type: "LOGIN",
      //     data: resUser.data,
      //     login: true,
      //   });
      setLoginFunc(true);
      localStorage.setItem("account", true);
      localStorage.setItem("token", res.data.accessToken);
      setRequest((prevRequestUser) => ({
        ...prevRequestUser,
        err: "",
        success: true,
      }));
      //   history.replace();
      window.location.href = "/home";
    } catch (err) {
      err.response.data.msg &&
        setRequest((prev) => ({
          ...prev,
          err: err.response.data.msg,
          success: false,
        }));
    }
  };

  return (
    <div className="box-auth">
      <h2>Login</h2>
      {err && ErrShow(err)}
      <form onSubmit={handleSubmit}>
        <div className="box-form">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            value={email}
            onChange={handleChangeInput}
            placeholder="Enter email..."
            type="email"
            required
          />
        </div>
        <div className="box-form">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            value={password}
            onChange={handleChangeInput}
            placeholder="Enter password..."
            type="password"
            required
          />
        </div>
        <button type="submit">Sign in</button>
      </form>
      <p>
        Create a new user.
        <Link to="/user/register">Register!</Link>
      </p>
      <p>
        <h4>Account admin use test message</h4>
        <p>Email: khuong@gmail.com</p>
        <p>Password: 123456</p>
        <p>Before that please create an account and send me a message!</p>
      </p>
    </div>
  );
};

export default Login;
