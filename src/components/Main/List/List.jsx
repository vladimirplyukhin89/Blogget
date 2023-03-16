import Post from './Post';
import s from './List.module.css';

export const List = () => {
  const postsData = [
    {
      thumbnail: '',
      title: 'Title',
      author: 'Nickname1',
      ups: 24,
      date: '2022-02-24T09:45:00.000Z',
    },
    {
      thumbnail: '',
      title: 'Title',
      author: 'Nickname2',
      ups: 80,
      date: '2022-03-24T09:45:00.000Z',
    },
    {
      thumbnail: '',
      title: 'Title',
      author: 'Nickname3',
      ups: 38,
      date: '2022-04-24T09:45:00.000Z',
    },
  ];

  return (
    <ul className={s.list}>
      {postsData.map((postData, i) => {
        return <Post key={i} postData={postData} />;
      })}
    </ul>
  );
};
