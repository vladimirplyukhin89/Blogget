/* eslint-disable camelcase */
import { useEffect, useState } from "react";

export const useAuth = (url = "", headers = {}, token = "") => {
  const [auth, setAuth] = useState({});

  useEffect(() => {
    if (!token) return;

    fetch(url, headers)
      .then(res => res.json())
      .then(data => {
        const { name, icon_img } = data;
        const img = icon_img.replace(/\?.*$/, "");
        setAuth({ name, img });
      })
      .catch(err => {
        console.log(err);
        setAuth({});
      });
  }, [token]);

  return [auth];
};
