import React, { useEffect, useRef } from "react";
import TextRight from "./TextRight";

const RoomChat = ({ messages, user }) => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="messagesWrapper">
      {messages.map((message, index) => (
        <div key={index} className="message">
          {user.name === message.name ? (
            <TextRight message={message} user={user} />
          ) : (
            <div className="message-item">
              <div style={{ width: "30px", height: "30px" }}>
                <img src={user.avatar} alt="" />
              </div>
              <p>
                {message.text}
                <span>{message.time}</span>
              </p>
            </div>
          )}
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default RoomChat;
