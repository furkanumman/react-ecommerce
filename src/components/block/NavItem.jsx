import { Link } from "react-router-dom";
import cn from "classnames";

const NavItem = ({ to, children, onMouseEnter }) => {
  const cls = cn(
    "border-b-2 border-transparent px-4 py-2 text-slate-50",
    "hover:text-slate-300 hover:border-slate-300",
    "transition duration-300 ease-in-out",
  );
  return (
    <li className="text-md my-1">
      <Link to={to} className={cls} onMouseEnter={onMouseEnter}>
        {children}
      </Link>
    </li>
  );
};

export default NavItem;
