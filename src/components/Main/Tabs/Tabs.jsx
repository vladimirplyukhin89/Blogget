import React from 'react';
import s from './Tabs.module.css';

export const Tabs = props => {
  return (
    <ul className={s.list}>
      <li>
        <a href="/">Главная</a>
      </li>
      <li>
        <a href="/">Просмотренные</a>
      </li>
      <li>
        <a href="/">Сохранённые</a>
      </li>
      <li>
        <a href="/">Мои посты</a>
      </li>
    </ul>
  );
};
