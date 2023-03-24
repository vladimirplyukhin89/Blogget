import { useEffect, useState, useContext } from "react";

import { URL_API } from "../api/const";
import { tokenContext } from "../context";

export const useAuth = () => {
  const { token, delToken } = useContext(tokenContext);
  const [auth, setAuth] = useState({});
  const [authError, setAuthError] = useState("");

  const authUrl = `${URL_API}/api/v1/me`;
  const authHeaders = {
    headers: {
      Authorization: `bearer ${token}`
    }
  };

  useEffect(() => {
    if (!token) return;

    fetch(authUrl, authHeaders)
      .then(res => {
        if (res.status === 401) {
          throw new Error(res.status);
        }
        return res.json();
      })

      .then(data => {
        const { name, icon_img: iconImg } = data;
        const img = iconImg.replace(/\?.*$/, "");
        setAuth({ name, img });
      })
      .catch(err => {
        console.log(err);
        const error = err;
        setAuthError(error);
        setAuth({});
        delToken();
      });
  }, [token]);

  const clearAuth = () => setAuth({});

  return [auth, authError, clearAuth];
};
