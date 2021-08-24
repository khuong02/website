import React, { useEffect, useContext } from "react";
import TypeWriterEffect from "react-typewriter-effect";

import { LoadingContext } from "../context/Loading";

const Welcome = () => {
  const { loading, setLoadingFunc } = useContext(LoadingContext);

  useEffect(() => {
    if (window.location.href.split("/")[3] === "") {
      setTimeout(() => {
        setLoadingFunc(false);
      }, 6200);
    } else {
      setLoadingFunc(false);
    }
  }, [setLoadingFunc]);

  return (
    <div className={loading ? "welcome" : "welcome exit"}>
      <TypeWriterEffect
        textStyle={{
          fontFamily: "fmain",
          fontWeight: 500,
          fontSize: "32px",
          textAlign: "center",
          textTransform: "uppercase",
          color: "#000",
          letterSpacing: "10px",
          wordWrap: "break-word",
        }}
        cursorColor="transparent"
        startDelay={500}
        multiText={[
          "Hello World!",
          "I'm Dao Vinh Khuong!",
          "Welcome to my project!",
        ]}
        multiTextDelay={1000}
        typeSpeed={30}
      />
    </div>
  );
};

export default Welcome;
