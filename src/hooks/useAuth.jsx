import { useEffect, useState } from "react";

export const useAuth = (url = "", headers = {}, token = "") => {
  const [auth, setAuth] = useState({});
  const [error, setError] = useState("");

  function clearAuth() {
    setAuth({});
  }

  useEffect(() => {
    if (!token) return;

    fetch(url, headers)
      .then(res => {
        if (res.status > 200) {
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
        setError(error);
        setAuth({});
      });
  }, [token]);

  return [auth, error, clearAuth];
};
