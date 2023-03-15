import PropTypes from 'prop-types';

import s from './PostContent.module.css';

export const PostContent = ({ author, title }) => {
  return (
    <div className={s.content}>
      <h2 className={s.title}>
        <a className={s.linkPost} href="#post">
          {title}
        </a>
      </h2>
      <a className={s.linkAuthor} href="#author">
        {author}
      </a>
    </div>
  );
};

PostContent.propsTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
};
