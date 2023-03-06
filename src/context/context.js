import React, { createContext } from "react";

const StateContext = createContext({
  chart: false,
  navAction: {},
  screenSize: "",
  toggleActiveMenu: () => {},
  handleClick: () => {},
  setScreenSize: () => {},
  toggleScreenSize: () => {},
});

export default StateContext;
