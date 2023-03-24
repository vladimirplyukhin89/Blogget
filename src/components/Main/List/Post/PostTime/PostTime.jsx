import PropTypes from "prop-types";

import { formatDate } from "../../../../../utils";
import s from "./PostTime.module.css";

export const PostTime = ({ date }) => {
  return (
    <time className={s.date} dateTime={date}>
      {formatDate(date)}
    </time>
  );
};

PostTime.propsTypes = {
  date: PropTypes.string
};
