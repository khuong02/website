import React from "react";

const TextRight = ({ message, user }) => {
  return (
    <div className="message-item right">
      <div style={{ width: "30px", height: "30px" }}>
        <img src={user.avatar} alt="" />
      </div>
      <p className="text-right">
        {message.text}
        <span>{message.time}</span>
      </p>
    </div>
  );
};

export default TextRight;
