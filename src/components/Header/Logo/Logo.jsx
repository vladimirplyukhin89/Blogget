import React from 'react';

import { Text } from '../../../UI/Text';
import { ReactComponent as LogoIcon } from './img/logo.svg';
import s from './Logo.module.css';

export const Logo = () => {
  return (
    <Text As="a" className={s.link} href="/">
      <LogoIcon className={s.logo} />
    </Text>
  );
};
