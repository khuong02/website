import React, { createContext, useState } from "react";

export const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [tabChange, setTabChange] = useState(false);

  const setLoadingFunc = (bool) => {
    setLoading(bool);
  };
  const setTabChangeFunc = (bool) => {
    setTabChange(bool);
  };

  return (
    <LoadingContext.Provider
      value={{
        tabChange: tabChange,
        setTabChangeFunc: setTabChangeFunc,
        loading: loading,
        setLoadingFunc: setLoadingFunc,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
};
