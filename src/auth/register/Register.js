import React, { useState } from "react";
import axios from "axios";
import { ErrShow, SuccessShow } from "../../notification/Notification";
import { Link } from "react-router-dom";

const initState = {
  name: "",
  email: "",
  password: "",
  rf_password: "",
  err: "",
  success: "",
};

const Register = () => {
  const [requestUser, setRequest] = useState(initState);

  const { email, password, err, success, name, rf_password } = requestUser;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setRequest({ ...requestUser, [name]: value, err: "", success: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/user/register", {
        name,
        email,
        password,
        rf_password,
      });

      if (!res || !res.data.success)
        return setRequest((prev) => ({
          ...prev,
          err: "Account register not success.",
          success: "",
        }));

      setRequest({
        ...initState,
        success: "Register success",
      });
    } catch (err) {
      err.response.data.msg &&
        setRequest((prev) => ({
          ...prev,
          err: err.response.data.msg,
          success: "",
        }));
    }
  };

  return (
    <div className="box-auth">
      <h2>Register</h2>
      {err && ErrShow(err)}
      {success && SuccessShow(success)}
      <form onSubmit={handleSubmit}>
        <div className="box-form">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            value={name}
            onChange={handleChangeInput}
            placeholder="Enter name..."
            type="text"
          />
        </div>
        <div className="box-form">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            value={email}
            onChange={handleChangeInput}
            placeholder="Enter email..."
            type="email"
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
          />
        </div>
        <div className="box-form">
          <label htmlFor="rf_password">Re_password</label>
          <input
            id="rf_password"
            name="rf_password"
            value={rf_password}
            onChange={handleChangeInput}
            placeholder="Enter rf_password..."
            type="password"
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
      <p>
        Account is already.
        <Link to="/user/login">Login!</Link>
      </p>
    </div>
  );
};

export default Register;
