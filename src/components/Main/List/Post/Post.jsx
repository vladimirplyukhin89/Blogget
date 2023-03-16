import PropTypes from 'prop-types';

import { PostContent } from './PostContent/PostContent';
import { PostDeleteButton } from './PostDeleteButton/PostDeleteButton';
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
      <PostDeleteButton />
      <PostRating ups={ups} />
      <PostTime date={date} />
    </li>
  );
};

Post.propsTypes = {
  postsData: PropTypes.object,
};