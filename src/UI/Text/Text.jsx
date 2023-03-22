import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import s from "./Text.module.css";

export const Text = props => {
  const {
    As = "span",
    color = "black",
    size,
    tsize,
    dsize,
    className,
    children,
    href,
    center,
    fw
  } = props;

  const classes = classNames(
    className,
    s[color],
    { [s.center]: center },
    { [s[`fw${fw}`]]: fw },
    { [s[`fs${size}`]]: size },
    { [s[`fst${tsize}`]]: tsize },
    { [s[`fsd${dsize}`]]: dsize }
  );

  return (
    <As className={classes} href={href}>
      {children}
    </As>
  );
};

Text.propTypes = {
  As: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  tsize: PropTypes.number,
  dsize: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.node,
  href: PropTypes.string,
  center: PropTypes.bool,
  fontWeight: PropTypes.number
};
