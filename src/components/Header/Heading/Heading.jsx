import PropTypes from "prop-types";

import { Text } from "../../../UI/Text";
import s from "./Heading.module.css";

export const Heading = ({ text }) => {
  return (
    <Text As="h1" size={22} tsize={26} center className={s.heading}>
      {text}
    </Text>
  );
};

Heading.propTypes = {
  text: PropTypes.string
};
