import React from "react";

const Infor = ({ user }) => {
  return (
    <div className="info">
      <h3>Information</h3>
      <div className="avatar">
        <img src={user.avatar} alt="" />
        {/* <input type="file" />
        <button>Change</button> */}
      </div>
      <p>Name: {user.name}</p>
    </div>
  );
};

export default Infor;
