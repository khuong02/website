import React, { createContext, useState, useEffect } from "react";
// import { reducer } from "../reducer/Reducer";
import axios from "axios";

export const UserContext = createContext();

// const initStateUser = {
//   login: false,
//   data: {},
// };

export const UserProvider = ({ children }) => {
  const [login, setLogin] = useState(false);
  //   const [state, dispatch] = useReducer(reducer, initStateUser);
  const [user, setUser] = useState({});
  //   //   const user = useRef(state);
  //   const [admin, setAdmin] = useState({});

  const setLoginFunc = (bool) => {
    setLogin(bool);
  };

  //   const setUserFunc = (obj) => {
  //     setUser(obj);
  //   };

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get("/posts", {
          headers: { "auth-token": localStorage.token },
        });
        if (!res) console.log("token is error");

        setUser(res.data);
        // user.current = state;
      } catch (err) {
        //err.response.data.msg && setLogin(true);
        console.log(err.response);
      }
    };
    getUser();
  }, []);

  //   useEffect(() => {
  //     const getAdmin = async () => {
  //       try {
  //         const res = await axios.get("/user/admin");
  //         if (!res) return;

  //         setAdmin(res.data[0]);
  //       } catch (err) {
  //         return err.response.data.msg && err.response.data.msg;
  //       }
  //     };
  //     getAdmin();
  //   }, []);

  return (
    <UserContext.Provider
      value={{
        login: login,
        setLoginFunc: setLoginFunc,
        user: user,
        // admin: admin,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
