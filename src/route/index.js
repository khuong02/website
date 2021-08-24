import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import LoadingPageChild from "../loading/LoadingPageChild";
import PrivatePage from "./private/PrivatePage";
import Home from "../components/home/Home";
import Technology from "../components/technology/Technology";
import ShowRoom from "../components/showRoom/ShowRoom";
import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import Message from "../components/message/Message";
import User from "../auth/User";

const IndexAuth = () => {
  const { user } = useContext(UserContext);

  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/home" component={Home} exact />
      <Route path="/technology" component={Technology} exact />
      <Route path="/show-room" component={ShowRoom} exact />
      <Route path="/about" component={About} exact />
      <Route path="/contact" component={Contact} exact />
      <Route path="/user/:name" component={User} exact />
      <PrivatePage path="/message/:id">
        {user._id ? <Message /> : <LoadingPageChild />}
      </PrivatePage>
      <Route path="*" exact={true}>
        <Redirect to="/home" />
      </Route>
    </Switch>
  );
};

export default IndexAuth;
