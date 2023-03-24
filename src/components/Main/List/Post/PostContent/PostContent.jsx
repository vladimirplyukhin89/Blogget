import PropTypes from "prop-types";

import { Text } from "../../../../../UI/Text";
import s from "./PostContent.module.css";

export const PostContent = ({ author, title }) => {
  return (
    <div className={s.content}>
      <Text As="h2" className={s.title}>
        <Text As="a" size={18} tsize={24} className={s.linkPost} href="#post">
          {title}
        </Text>
      </Text>
      <Text
        As="a"
        color="green"
        size={12}
        tsize={14}
        className={s.linkAuthor}
        fw={400}
        href="#author"
      >
        {author}
      </Text>
    </div>
  );
};

PostContent.propsTypes = {
  author: PropTypes.string,
  title: PropTypes.string
};
