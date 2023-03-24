import { useEffect, useContext } from "react";

import Post from "./Post";
import s from "./List.module.css";

import { postContext } from "../../../context";

export const List = () => {
  const { bestPosts, bestPostsError } = useContext(postContext);

  useEffect(() => {
    if (bestPostsError) {
      return alert(`Сбой при получении постов: ${bestPostsError}`);
    }
  }, [bestPostsError]);

  return (
    <ul className={s.list}>
      {bestPosts.map((postData, i) => {
        return <Post key={i} postData={postData} />;
      })}
    </ul>
  );
};
