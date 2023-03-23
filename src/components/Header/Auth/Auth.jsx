import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { useAuth } from "../../../hooks";
import { Text, IconSVG } from "../../../UI";
import { ReactComponent as LoginIcon } from "./img/login.svg";
import s from "./Auth.module.css";
import { urlAuth } from "../../../api/auth";
import { URL_API } from "../../../api/const";

export const Auth = ({ token, delToken }) => {
  const [showBtn, setShowBtn] = useState(false);
  const authUrl = `${URL_API}/api/v1/me`;
  const authHeaders = {
    headers: {
      Authorization: `bearer ${token}`
    }
  };
  const [auth, error, clearAuth] = useAuth(authUrl, authHeaders, token);
  const handleAvatarBtn = () => {
    setShowBtn(prevSate => !prevSate);
  };

  const handleLogoutBtn = () => {
    clearAuth();
    delToken();
  };

  useEffect(() => {
    if (error) {
      return alert(`Сбой при авторизации: ${error}`);
    }
  }, [error]);

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
          {showBtn ? (
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
  token: PropTypes.string,
  delToken: PropTypes.func
};
