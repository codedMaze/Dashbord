import React, { createContext } from "react";

const StateContext = createContext({
  chart: false,
  navAction: {},
  screenSize: "",
  screenColor: "",
  screenTheme: "",
  themeSettings: "",
  toggleActiveMenu: () => {},
  handleClick: () => {},
  setScreenSize: () => {},
  toggleScreenSize: () => {},
  setThemeSettings: () => {},
  themeMode: () => {},
  setColor: () => {},
  resetNavAction: () => {},
});

export default StateContext;
