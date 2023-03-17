import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { IconSVG } from '../../../UI/IconSVG';
import s from './Tabs.module.css';
import { assignId, debounceRaf } from '../../../utils';
import { ReactComponent as ArrowIcon } from './img/arrow.svg';
import { ReactComponent as HomeIcon } from './img/home.svg';
import { ReactComponent as BestIcon } from './img/best.svg';
import { ReactComponent as HotIcon } from './img/hot.svg';
import { ReactComponent as TopIcon } from './img/top.svg';

const LIST = [
  { title: 'Главная', Icon: HomeIcon },
  { title: 'Топ', Icon: TopIcon },
  { title: 'Лучшие', Icon: BestIcon },
  { title: 'Горячие', Icon: HotIcon },
].map(assignId);

export const Tabs = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdown, setIsDropdown] = useState(true);
  const [title, setTitle] = useState('Главная');

  const handleResize = () => {
    if (document.documentElement.clientWidth < 768) {
      setIsDropdown(true);
    } else {
      setIsDropdown(false);
    }
  };

  useEffect(() => {
    const debounceResize = debounceRaf(handleResize);
    debounceResize();
    window.addEventListener('resize', debounceResize);

    return () => {
      window.removeEventListener('resize', debounceResize);
    };
  }, []);

  return (
    <div className={s.container}>
      {isDropdown && (
        <div className={s.wrapperBtn}>
          <button
            className={s.btn}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {title}
            <ArrowIcon />
          </button>
        </div>
      )}

      {(isDropdownOpen || !isDropdown) && (
        <ul className={s.list} onClick={() => setIsDropdownOpen(false)}>
          {LIST.map(({ title, id, Icon }) => {
            return (
              <li className={s.item} key={id}>
                <button className={s.btn} onClick={() => setTitle(title)}>
                  {title}
                  {Icon && <IconSVG Icon={Icon} width={40} />}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

Tabs.propTypes = {
  list: PropTypes.array,
  setList: PropTypes.func,
};
