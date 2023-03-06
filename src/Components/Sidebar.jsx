import React, { useContext } from "react";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Link, NavLink } from "react-router-dom";

import { links } from "../data/dummy";
import StateContext from "../context/context";

const Sidebar = () => {
  const { activeMenu, toggleActiveMenu } = useContext(StateContext);

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-gray-200 m-2";
  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={() => {
                toggleActiveMenu();
              }}
              className="items-center flex gap-3 ml-3 tracking-tight font-extrabold mt-4 text-xl dark:text-white text-slate-900"
            >
              <SiShopware /> <spam>Shoppy</spam>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() => {
                  changeActiveMenu();
                }}
                className="text-xl rounded-full p-3 mt-4 hover:bg-light-gray dark:text-white md:hidden"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 mm-3 mt-4 uppercase">
                  {item.title}
                </p>
                {item.links.map((links) => (
                  <NavLink
                    key={links.name}
                    to={`/${links.name}`}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                    onClick={() => {}}
                  >
                    {links.icon}
                    <span className="capitalize">{links.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
