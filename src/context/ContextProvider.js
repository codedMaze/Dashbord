import React, { useReducer, useState } from "react";
import StateContext from "./context";

const defaultNavState = {
  activeMenu: true,
  screenSize: {},
  navAction: {
    chart: false,
    cart: false,
    userProfile: false,
    notification: false,
  },
};

const navigateReducer = (state, action) => {
  if (action.type === "TOGGLE_ACTIVE_MENU") {
    const active = !state.activeMenu;
    return {
      ...state,
      activeMenu: active,
    };
  }
  if (action.type === "ACTIVE_DROPDOWN") {
    return {
      ...state,
      navAction: { ...state.activeMenu, [action.value]: true },
    };
  }

  if (action.type === "SET_SCREEN_SIZE") {
    return {
      ...state,
      screenSize: action.size,
    };
  }

  if (action.type === "SET_ACTIVE_SCREEN") {
    return {
      ...state,
      activeMenu: action.size,
    };
  }

  return defaultNavState;
};

const ContextProvider = ({ children }) => {
  const [themeSettings, setThemeSettings] = useState(false);
  const [screenColor, setScreenColor] = useState("#03C9D7");
  const [screenTheme, setScreenTheme] = useState("Light");

  const themeMode = (e) => {
    setScreenTheme(e.target.value);
    localStorage.setItem("theme", e.target.value);
    setThemeSettings(false);
  };

  const setColor = (e) => {
    setScreenColor(e);
    localStorage.setItem("color", e);
    setThemeSettings(false);
  };

  const [navState, dispatchNavAction] = useReducer(
    navigateReducer,
    defaultNavState
  );

  const toggleActiveMenu = () => {
    dispatchNavAction({
      type: "TOGGLE_ACTIVE_MENU",
    });
  };
  const handleClick = (value) => {
    dispatchNavAction({
      type: "ACTIVE_DROPDOWN",
      value,
    });
  };

  const setScreenSize = (size) => {
    dispatchNavAction({
      type: "SET_SCREEN_SIZE",
      size,
    });
  };

  const toggleScreenSize = (size) => {
    dispatchNavAction({
      type: "SET_ACTIVE_SCREEN",
      size,
    });
  };

  const stateContext = {
    activeMenu: navState.activeMenu,
    navAction: navState.navAction,
    screenSize: navState.screenSize,
    screenColor,
    screenTheme,
    themeSettings,
    toggleActiveMenu,
    handleClick,
    setScreenSize,
    toggleScreenSize,
    setThemeSettings,
    themeMode,
    setColor,
  };

  return (
    <StateContext.Provider value={stateContext}>
      {children}
    </StateContext.Provider>
  );
};

export default ContextProvider;
