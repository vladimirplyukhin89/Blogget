import PropTypes from 'prop-types';

import s from './PostRating.module.css';

export const PostRating = ({ ups }) => {
  return (
    <div className={s.rating}>
      <button className={s.up} aria-label="Увеличить рейтинг" />
      <p className={s.ups}>{ups}</p>
      <button className={s.down} aria-label="Понизить рейтинг" />
    </div>
  );
};

PostRating.propsTypes = {
  ups: PropTypes.number,
};
