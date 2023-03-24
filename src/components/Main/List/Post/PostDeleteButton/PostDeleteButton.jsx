import { IconSVG } from "../../../../../UI/IconSVG";
import s from "./PostDeleteButton.module.css";
import { ReactComponent as DeleteIcon } from "../img/delete.svg";

export const PostDeleteButton = () => {
  return (
    <button className={s.delete}>
      <IconSVG Icon={DeleteIcon} />
    </button>
  );
};
