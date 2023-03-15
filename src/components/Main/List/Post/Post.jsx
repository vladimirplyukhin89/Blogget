import PropTypes from 'prop-types';

import { PostContent } from './PostContent/PostContent';
import { PostButton } from './PostButton/PostButton';
import { PostRating } from './PostRating/PostRating';
import { PostTime } from './PostTime/PostTime';
import s from './Post.module.css';
import notphoto from './img/notphoto.jpg';

export const Post = ({ postData }) => {
  const { title, author, ups, date } = postData;
  return (
    <li className={s.post}>
      <img className={s.img} src={notphoto} alt={title} />

      <PostContent author={author} title={title} />
      <PostButton />
      <PostRating ups={ups} />
      <PostTime date={date} />
    </li>
  );
};

Post.propsTypes = {
  postData: PropTypes.object,
};
