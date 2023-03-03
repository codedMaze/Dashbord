import React, { createContext } from "react";

const StateContext = createContext({
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
  activeMenu: true,
  changeActiveMenu: () => {},
});

export default StateContext;
