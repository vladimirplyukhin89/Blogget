import { useEffect, useState } from "react";

import { URL_API } from "../api/const";
import { getToken } from "./token";

export const usePosts = () => {
  const [bestPosts, setBestPosts] = useState([]);
  const [bestPostsError, setBestPostsError] = useState("");
  const token = getToken();

  const bestPostUrl = `${URL_API}/best`;
  const bestPostHeaders = {
    headers: {
      Authorization: `bearer ${token}`
    }
  };

  useEffect(() => {
    if (!token) return;

    fetch(bestPostUrl, bestPostHeaders)
      .then(res => {
        if (res.status === 401) {
          throw new Error(res.status);
        }
        return res.json();
      })
      .then(posts => {
        setBestPosts(posts.data.children);
      })
      .catch(err => {
        const error = err;
        setBestPostsError(error);
        console.error(error);
      });
  }, [token]);

  return [bestPosts, bestPostsError];
};
