import React from "react";
// import { UserContext } from "../../../../context/UserContext";
import { Link } from "react-router-dom";

const Admin = ({ dataUser, id }) => {
  return (
    <div className="admin-box">
      <h3>List User Send Message</h3>
      {dataUser &&
        dataUser.map((item) => {
          return (
            <div key={item._id}>
              <Link
                className="list-user"
                to={`/message/${item._id}`}
                onClick={(e) => id === item._id && e.preventDefault()}
              >
                <div>
                  <img src={item.avatar} alt="" />
                </div>
                {item.name}
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default Admin;
