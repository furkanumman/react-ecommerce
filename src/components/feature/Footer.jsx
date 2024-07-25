import { Link } from "react-router-dom";
import { topBarItems, socialItems, navbarItems } from "@/utils/constants";

const Footer = () => {
  const ulCls = "flex items-center gap-4";
  const linkCls =
    "text-slate-50 hover:text-slate-300 transition duration-300 ease-in-out";
  return (
    <footer className="bg-primary-dark py-10">
      <div className="container">
        <section className="flex flex-col items-center justify-between gap-6">
          <ul className={ulCls}>
            {topBarItems.map((item, index) => (
              <li key={index}>
                <Link className={linkCls} to={item.to}>
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
          <ul className={ulCls}>
            {socialItems.map((item, index) => (
              <li key={index}>
                <Link className={linkCls} to={item.to}>
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
          <ul className={ulCls}>
            {navbarItems.map((item, index) => (
              <li key={index}>
                <Link className={linkCls} to={item.to}>
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <p className="py-4 text-center text-slate-300">
        &copy; 2024 All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
