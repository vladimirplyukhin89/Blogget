import classNames from "classnames";
import PropTypes from "prop-types";

export const IconSVG = props => {
  const { Icon, width = "100%", height = "100%", className } = props;
  const classes = classNames(className);

  return <Icon className={classes} height={height} width={width} />;
};

IconSVG.propTypes = {
  Icon: PropTypes.elementType,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};
