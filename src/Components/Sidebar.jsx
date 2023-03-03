import React from "react";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Link, NavLink } from "react-router-dom";

import { links } from "../data/dummy";

const Sidebar = () => {
  const activeMenu = true;

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={() => {}}
              className="items-center flex gap-3 ml-3 tracking-tight font-extrabold mt-4 text-xl dark:text-white text-slate-900"
            >
              <SiShopware /> <spam>Shoppy</spam>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() => {}}
                className="text-xl rounded-full p-3 mt-4 hover:bg-light-gray dark:text-white md:hidden"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10">
            {links.map((item) => (
              <div
                className="text-gray-400 mm-3 mt-4 uppercase"
                key={item.title}
              >
                {item.title}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
