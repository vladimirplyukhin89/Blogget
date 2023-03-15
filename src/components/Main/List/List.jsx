import Post from './Post';
import s from './List.module.css';

export const List = props => {
  const postData = {
    thumbnail: '',
    title: 'Title',
    author: 'Nickname',
    ups: 24,
    date: '2022-02-24T09:45:00.000Z',
  };

  return (
    <ul className={s.list}>
      <Post postData={postData} />
    </ul>
  );
};
