import PropTypes from "prop-types";

import { PostContent } from "./PostContent/PostContent";
import { PostDeleteButton } from "./PostDeleteButton/PostDeleteButton";
import { PostRating } from "./PostRating/PostRating";
import { PostTime } from "./PostTime/PostTime";
import s from "./Post.module.css";
import { setImage } from "../../../../utils";
import notphoto from "./img/notphoto.jpg";

export const Post = ({ postData }) => {
  const { data } = postData;
  const { title, author, ups, created, thumbnail } = data;

  return (
    <li className={s.post}>
      <img className={s.img} src={setImage(thumbnail, notphoto)} alt={title} />

      <PostContent author={author} title={title} />
      <PostDeleteButton />
      <PostRating ups={ups} />
      <PostTime date={created} />
    </li>
  );
};

Post.propsTypes = {
  postsData: PropTypes.object
};
