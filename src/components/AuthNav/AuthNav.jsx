import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./AuthNav.module.css";

const AuthNav = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <div className={css.navWrapper}>
      <NavLink to="/login" className={buildLinkClass}>
        Log In
      </NavLink>
      <NavLink to="/register" className={buildLinkClass}>
        Register
      </NavLink>
    </div>
  );
};

export default AuthNav;
