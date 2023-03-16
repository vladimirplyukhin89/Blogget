import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as LoginIcon } from './img/login.svg';
import s from './Auth.module.css';

export const Auth = ({ auth }) => {
  return <button className={s.button}>{auth ? auth : <LoginIcon className={s.svg} />}</button>;
};

Auth.propTypes = {
  auth: PropTypes.bool,
};
