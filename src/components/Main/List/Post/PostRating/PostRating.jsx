import PropTypes from 'prop-types';

import { Text } from '../../../../../UI/Text';
import s from './PostRating.module.css';

export const PostRating = ({ ups }) => {
  return (
    <div className={s.rating}>
      <button className={s.up} aria-label="Увеличить рейтинг" />
      <Text As="p" size={14} tsize={18} className={s.ups}>
        {ups}
      </Text>
      <button className={s.down} aria-label="Понизить рейтинг" />
    </div>
  );
};

PostRating.propsTypes = {
  ups: PropTypes.number,
};
