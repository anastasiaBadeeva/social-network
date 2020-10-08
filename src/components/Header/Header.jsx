import React from "react";
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = (props) => {
  return (
    <header className={s.header}>
      <NavLink to={"/"}>  <img src="http://mythemestore.com/friend-finder/images/logo.png" /></NavLink>

        <div className={s.loginBlock}>
            {props.isAuth ?
                <div> {props.login} - <button className={s.btn-primary} onClick={props.logout}>Log out</button></div>
                : <NavLink to={"/login"}>Login</NavLink>}

        </div>
    </header>
  );
};
export default Header;
