import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "../header/Header";
import Body from "../body/Body";

const Container = () => {
  return (
    <section>
      <Router>
        <Header />
        <Body />
      </Router>
    </section>
  );
};

export default Container;
