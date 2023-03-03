import React, { useState } from "react";
import StateContext from "./context";

const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);

  const toggleMenu = () => {
    setActiveMenu((prevState) => !prevState);
  };

  const stateContext = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
    activeMenu,
    changeActiveMenu: toggleMenu,
  };

  return (
    <StateContext.Provider value={stateContext}>
      {children}
    </StateContext.Provider>
  );
};

export default ContextProvider;
