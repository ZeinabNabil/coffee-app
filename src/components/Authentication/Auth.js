import React from "react";

// Style
import style from "../../css/authentication/Auth.module.css";

// React Router
import { Outlet } from "react-router-dom";

const Auth = () => {
  return (
    <div className={style.auth_bg}>
      <div className={style.auth_container}>
        <div className={style.auth}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Auth;
