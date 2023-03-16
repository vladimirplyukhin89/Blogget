import React from 'react';

import { ReactComponent as SearcIcon } from './img/search.svg';
import s from './Search.module.css';

export const Search = () => {
  return (
    <form className={s.form}>
      <input className={s.search} type="search" />
      <button className={s.button}>
        <SearcIcon />
      </button>
    </form>
  );
};
