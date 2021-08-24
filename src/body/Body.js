import React from "react";
import { Switch, useLocation, withRouter } from "react-router-dom";
import { useTransition, animated } from "react-spring";

import Index from "../route/index";

const Body = () => {
  const location = useLocation();

  const transitions = useTransition(location, {
    from: {
      opacity: 0,
      transform: "translate3d(100%,0,0)",
      position: "absolute",
      width: "100%",
    },
    enter: {
      opacity: 1,
      transform: "translate3d(0,0,0)",
    },
    leave: {
      opacity: 0,
      transform: "translate3d(-50%,0,0)",
    },
  });

  return transitions((props, item) => (
    <animated.div style={props}>
      <Switch location={item}>
        <Index />
      </Switch>
    </animated.div>
  ));
};

export default withRouter(Body);
