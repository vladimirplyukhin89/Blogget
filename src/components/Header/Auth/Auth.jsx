import { useState } from "react";
import PropTypes from "prop-types";

import { useAuth } from "../../../hooks";
import { Text, IconSVG } from "../../../UI";
import { ReactComponent as LoginIcon } from "./img/login.svg";
import s from "./Auth.module.css";
import { urlAuth } from "../../../api/auth";
import { URL_API } from "../../../api/const";

export const Auth = ({ token }) => {
  const [showBtn, setShowBtn] = useState(false);
  const authUrl = `${URL_API}/api/v1/me`;
  const authHeaders = {
    headers: {
      Authorization: `bearer ${token}`
    }
  };
  const [auth] = useAuth(authUrl, authHeaders, token);
  function handleBtn() {
    setShowBtn(prevSate => !prevSate);
  }

  return (
    <div className={s.container}>
      {auth.name ? (
        <button className={s.btn} onClick={handleBtn}>
          {showBtn ? <button className={s.logout}>Logout</button> : ""}
          <img
            className={s.img}
            src={auth.img}
            title={auth.name}
            alt={`Аватар: ${auth.name}`}
          />
        </button>
      ) : (
        <Text className={s.authLink} As="a" href={urlAuth}>
          <IconSVG Icon={LoginIcon} className={s.svg} />
        </Text>
      )}
    </div>
  );
};

Auth.propTypes = {
  token: PropTypes.string
};
