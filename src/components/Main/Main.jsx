import React from "react";

import Layout from "../Layout";
import Tabs from "../Main/Tabs";
import List from "../Main/List";
// import { useDispatch } from "react-redux";
import s from "./Main.module.css";

export const Main = () => {
  // const dispatch = useDispatch();
  // const handleChange = e => {
  //   dispatch(updateComment(e.target.value));
  // };

  return (
    <main className={s.main}>
      <Layout>
        <Tabs />
        <List />
      </Layout>
    </main>
  );
};
