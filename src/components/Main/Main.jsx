import React from 'react';

import Layout from '../Layout';
import Tabs from '../Main/Tabs';
import List from '../Main/List';
import s from './Main.module.css';

export const Main = () => {
  return (
    <main className={s.main}>
      <Layout>
        <Tabs />
        <List />
      </Layout>
    </main>
  );
};
