import { ReactComponent as DeleteIcon } from '../img/delete.svg';
import s from './PostDeleteButton.module.css';

export const PostDeleteButton = () => {
  return (
    <button className={s.delete}>
      <DeleteIcon width={24} height={24} />
    </button>
  );
};
