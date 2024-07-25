import React from "react";
import { Link } from "react-router-dom";
import { topBarItems, socialItems } from "@/utils/constants";

const Topbar = () => {
  const linkItemCls = "hover:text-slate-50";
  return (
    <div className="relative z-20 bg-primary-dark py-2">
      <div className="container">
        <ul className="flex justify-end gap-4 text-xs text-slate-300">
          {topBarItems.map((item, index) => (
            <li key={index}>
              <Link to={item.to} className={linkItemCls}>
                {item.text}
              </Link>
            </li>
          ))}
          <li className="mx-6 border-r border-slate-50" />

          {socialItems.map((item, index) => (
            <li key={index}>
              <Link to={item.to} className={linkItemCls}>
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Topbar;
