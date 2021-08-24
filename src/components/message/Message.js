import React, { useContext, useRef, useState, useEffect } from "react";
import Admin from "./decentralization/admin/Admin";
// import User from "./decentralization/user/User";
import { UserContext } from "../../context/UserContext";
import { useParams } from "react-router-dom";
import io from "socket.io-client";
import Infor from "./Infor";
import RoomChat from "./decentralization/chat/RoomChat";
import Input from "./decentralization/input/Input";

const initState = {
  dataUser: [],
  dataMess: [],
  err: "",
};

const Message = () => {
  const { user } = useContext(UserContext);
  const { id } = useParams();

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [list, setList] = useState(initState);
  const [join, setJoin] = useState(false);

  const prev_role = useRef(user.role);
  const socket = useRef();
  //   const ENDPOINT = "localhost:5000";
  //   const role = user.role.toLowerCase();

  const { dataUser } = list;

  useEffect(() => {
    socket.current = io("http://localhost:5000", {
      transports: ["websocket", "polling", "flashsocket"],
    });

    if (id) {
      socket.current.emit(
        "join",
        { name: user.name, room: id, role: user.role.toLowerCase() },
        (error) => {
          if (error) {
            alert(error);
          }
        }
      );

      socket.current.on("dataRoom", (data) => {
        if (data.length !== 0 && data.uuid === id) {
          setMessages(data.mess);
          setJoin(true);
        } else {
          setMessages(data);
        }
      });
    }

    return () => {
      socket.current.on("disconnect");
      socket.current.off();
    };
  }, [id, user]);

  useEffect(() => {
    if (id) {
      socket.current.on(`${id}`, (obj) => {
        console.log(obj);
        setMessages([...messages, obj]);
      });
      socket.current.on("listMsg", (list) => {
        setList({ ...list, dataUser: list.userMess });
      });
      return () => socket.current.off();
    }
  }, [messages, list, id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() === "") {
      alert("Syntax wrong message. Re-enter the message!");
      return setMessage("");
    }
    socket.current.emit(
      `sendMessage`,
      { message, room: id, name: user.name },
      () => {
        setMessage("");
      }
    );
  };

  return (
    <div className="message-box">
      {prev_role.current === "ADMIN" && <Admin dataUser={dataUser} id={id} />}
      {join && (
        <div className={user.role !== "ADMIN" ? "box-chat user" : "box-chat"}>
          <RoomChat messages={messages} user={user} />
          <Input
            // handleChangeInput={handleChangeInput}
            setMessage={setMessage}
            handleSubmit={handleSubmit}
            user={user}
            message={message}
          />
        </div>
      )}
      <Infor user={user} />
    </div>
  );
};

export default Message;
