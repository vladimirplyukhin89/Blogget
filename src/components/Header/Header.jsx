import PropTypes from "prop-types";

import s from "./Header.module.css";
import Layout from "../Layout";
import Logo from "./Logo";
import Search from "./Search";
import Auth from "./Auth";
import Heading from "./Heading";

export const Header = ({ token }) => {
  return (
    <header className={s.header}>
      <Layout>
        <div className={s.gridContainer}>
          <Logo />
          <Heading text="Главная" />
          <Search />
          <Auth token={token} />
        </div>
      </Layout>
    </header>
  );
};

Header.propTypes = {
  token: PropTypes.string
};
