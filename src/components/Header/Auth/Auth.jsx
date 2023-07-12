import { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";

import { Text, IconSVG } from "../../../UI";
import { ReactComponent as LoginIcon } from "./img/login.svg";
import s from "./Auth.module.css";
import { urlAuth } from "../../../api/auth";
import { authContext } from "../../../context";
import { useDispatch } from "react-redux";
import { deleteToken } from "../../../store/actions/index";

export const Auth = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { auth, authError, clearAuth } = useContext(authContext);
  const dispatch = useDispatch();

  const handleAvatarBtn = () => {
    setShowLogout(prevSate => !prevSate);
  };

  const handleLogoutBtn = () => {
    clearAuth();
    dispatch(deleteToken);
  };

  useEffect(() => {
    if (authError) {
      return alert(`Сбой при авторизации: ${authError}`);
    }
  }, [authError]);

  return (
    <div className={s.container}>
      {auth.name ? (
        <>
          <button className={s.btn} onClick={handleAvatarBtn}>
            <img
              className={s.img}
              src={auth.img}
              title={auth.name}
              alt={`Аватар: ${auth.name}`}
            />
          </button>
          {showLogout ? (
            <button className={s.logout} onClick={handleLogoutBtn}>
              Logout
            </button>
          ) : (
            ""
          )}
        </>
      ) : (
        <Text className={s.authLink} As="a" href={urlAuth}>
          <IconSVG Icon={LoginIcon} className={s.svg} />
        </Text>
      )}
    </div>
  );
};

Auth.propTypes = {
  delToken: PropTypes.func
};
