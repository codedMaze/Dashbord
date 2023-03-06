import React, { useReducer } from "react";
import StateContext from "./context";

const defaultNavState = {
  activeMenu: true,
  chart: false,
  cart: false,
  userProfile: false,
  notification: false,
};

const navigateReducer = (state, action) => {
  if (action.type === "TOGGLE_ACTIVE_MENU") {
    const active = !state.activeMenu;
    return {
      ...state,
      activeMenu: active,
    };
  }
  return defaultNavState;
};

const ContextProvider = ({ children }) => {
  const [navState, dispatchNavAction] = useReducer(
    navigateReducer,
    defaultNavState
  );

  const toggleActiveMenu = () => {
    dispatchNavAction({
      type: "TOGGLE_ACTIVE_MENU",
    });
  };

  const stateContext = {
    chart: navState.chart,
    cart: navState.cart,
    userProfile: navState.userProfile,
    notification: navState.notification,
    activeMenu: navState.activeMenu,
    toggleActiveMenu,
  };

  return (
    <StateContext.Provider value={stateContext}>
      {children}
    </StateContext.Provider>
  );
};

export default ContextProvider;
