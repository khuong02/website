import React, { useState, useEffect, useContext } from "react";
import { DataHeader, DataHeaderLocal } from "./DataHeader";
import { Link, useLocation } from "react-router-dom";

import { UserContext } from "../context/UserContext";

const Header = () => {
  const { user } = useContext(UserContext);
  const [toggle, setToggle] = useState(false);
  const { pathname } = useLocation();
  const [path, setPath] = useState(pathname);

  useEffect(() => {
    if (pathname.split("/")[1] === "message") return setPath(`/message`);
    pathname === "/" ? setPath("/home") : setPath(pathname);
  }, [pathname, path, user]);

  const handleChangeActive = (e) => {
    e.preventDefault();
  };

  const handleChangeToggle = () => {
    setToggle(!toggle);
  };

  return (
    <header>
      <div className={toggle ? "navigation" : "navigation toggle"}>
        <nav>
          <ul>
            {DataHeader.map((item, index) => {
              return (
                <li
                  key={index}
                  className={
                    path === item.path
                      ? "box-active box-active-item"
                      : "box-active"
                  }
                >
                  <Link
                    to={item.message ? `/message/${user._id}` : item.path}
                    // to={item.path}
                    className={
                      path === item.path ? "active active-item" : "active"
                    }
                    onClick={(e) => {
                      if (item.path === path) {
                        handleChangeActive(e);
                      }
                      setToggle(false);
                    }}
                  >
                    <span>{item.icon}</span>
                    <span className="title">{item.name}</span>
                  </Link>
                </li>
              );
            })}
            {localStorage.account && (
              <li
                className={
                  path === "/logout"
                    ? "box-active box-active-item"
                    : "box-active"
                }
              >
                <Link
                  to="/logout"
                  className={
                    path === "/logout" ? "active active-item" : "active"
                  }
                  onClick={(e) => {
                    if (path === "/logout") {
                      handleChangeActive(e);
                    }
                    setToggle(false);
                    localStorage.clear();
                    window.location.href = "/user/login";
                  }}
                >
                  <span>
                    <i className="fas fa-sign-out-alt"></i>
                  </span>
                  <span className="title">Sign Out</span>
                </Link>
              </li>
            )}
            {!localStorage.account &&
              DataHeaderLocal.map((item, index) => {
                return (
                  <li
                    key={index}
                    className={
                      path === item.path
                        ? "box-active box-active-item"
                        : "box-active"
                    }
                  >
                    <Link
                      to={item.path}
                      className={
                        path === item.path ? "active active-item" : "active"
                      }
                      onClick={(e) => {
                        if (item.path === path) {
                          handleChangeActive(e);
                        }
                        setToggle(false);
                      }}
                    >
                      <span>{item.icon}</span>
                      <span className="title">{item.name}</span>
                    </Link>
                  </li>
                );
              })}
          </ul>
        </nav>
      </div>
      {/* <div className="box-logo">
        <Link to="/">
          <span className="logo">
            <img
              src="https://www.lamborghini.com/sites/it-en/files/themes/custom/lambo_facelift_2019/images/logo.png"
              alt=""
            />
          </span>
        </Link>
      </div> */}
      <button
        onClick={() => handleChangeToggle()}
        className={toggle ? "btn-menu exit" : "btn-menu"}
      >
        <div></div>
        <div></div>
        <div></div>
      </button>
    </header>
  );
};

export default Header;
