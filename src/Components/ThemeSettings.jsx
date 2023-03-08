import React, { useContext } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { BsCheck } from "react-icons/bs";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { themeColors } from "../data/dummy";
import StateContext from "../context/context";

const ThemeSettings = () => {
  const { setThemeSettings, themeMode, setColor, screenTheme, screenColor } =
    useContext(StateContext);
  return (
    <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0">
      <div className="float-right h-screen dark:text-gray-200 dark:bg-main-dark-bg bg-white dark:[#484b52] w-400">
        <div className="flex items-center justify-between p-4 ml-4">
          <p className="font-semibold text-xl">Settings</p>
          <button
            type="button"
            onClick={() => {
              setThemeSettings(false);
            }}
            style={{ color: "rgb(153, 171,180)", borderRadius: "50%" }}
            className="text-2xl p-3 hover:drop-shadow-lg hover:bg-light-gray"
          >
            <MdOutlineCancel />
          </button>
        </div>

        <div className="flex-col border-t-1 border-color p-4 ml-4">
          <p className="font-semibold text-lg">Theme Options</p>
          <div className="mt-4">
            <input
              type="radio"
              id="light"
              name="theme"
              value="Light"
              className="cursor-pointer"
              onChange={themeMode}
              checked={screenTheme === "Light"}
            />
            <label htmlFor="light" className="ml-2 text-md cursor-pointer">
              Light
            </label>
          </div>
          <div className="mt-4">
            <input
              type="radio"
              id="dark"
              name="theme"
              value="Dark"
              className="cursor-pointer"
              onChange={themeMode}
              checked={screenTheme === "Dark"}
            />
            <label htmlFor="dark" className="ml-2 text-md cursor-pointer">
              Dark
            </label>
          </div>
        </div>

        <div className="flex-col border-t-1 border-color p-4 ml-4">
          <p className="font-semibold text-lg">Theme Colors</p>
        </div>
        <div className="flex gap-3 ml-8">
          {themeColors.map((color, index) => (
            <TooltipComponent
              key={index}
              content={color.name}
              position="topCenter"
            >
              <div className="relative items-center mt-2 cursor-pointer flex gap-5 ">
                <button
                  className="h-10 w-10 rounded-full cursor-pointer"
                  type="button"
                  style={{ backgroundColor: color.color }}
                  onClick={() => {
                    setColor(color.color);
                  }}
                >
                  <BsCheck
                    className={`ml-2 text-2xl text-white ${
                      color.color === screenColor ? "block" : "hidden"
                    }`}
                  />
                </button>
              </div>
            </TooltipComponent>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;
