import React from 'react';

import { ReactComponent as LogoIcon } from './img/logo.svg';
import s from './Logo.module.css';

export const Logo = () => {
  return (
    <a className={s.link} href="/">
      <LogoIcon className={s.logo} />
    </a>
  );
};
