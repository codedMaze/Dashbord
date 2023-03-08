import React, { useEffect, useContext } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import avatar from "../data/avatar.jpg";
import { Cart, Chart, Notification, UserProfile } from ".";
import StateContext from "../context/context";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={customFunc}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const {
    toggleActiveMenu,
    navAction,
    handleClick,
    screenSize,
    setScreenSize,
    toggleScreenSize,
    screenColor,
  } = useContext(StateContext);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const cleanUp = setTimeout(() => {
      if (screenSize <= 900) {
        toggleScreenSize(false);
      } else {
        toggleScreenSize(true);
      }
      return () => {
        clearTimeout(cleanUp);
      };
    }, 500);
  }, [screenSize]);

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton
        title="menu"
        color={screenColor}
        customFunc={() => toggleActiveMenu()}
        icon={<AiOutlineMenu />}
      />
      <div className="flex">
        <NavButton
          title="cart"
          color={screenColor}
          customFunc={() => handleClick("cart")}
          icon={<FiShoppingCart />}
        />
        <NavButton
          title="chat"
          color={screenColor}
          customFunc={() => handleClick("chart")}
          icon={<BsChatLeft />}
          dotColor="#03c9d7"
        />
        <NavButton
          title="notifications"
          color={screenColor}
          customFunc={() => handleClick("notification")}
          icon={<RiNotification3Line />}
          dotColor="#03c9d7"
        />
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick("userProfile")}
          >
            <img src={avatar} className="rounded-full w-8 h-8" />
            <p>
              <span className="text-gray-400 text-14">Hi, </span>
              <span className="text-gray-400 font-bold ml-1 text-14">
                Lukman
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>
        {navAction.cart && <Cart />}
        {navAction.chart && <Chart />}
        {navAction.userProfile && <UserProfile />}
        {navAction.notification && <Notification />}
      </div>
    </div>
  );
};

export default Navbar;
