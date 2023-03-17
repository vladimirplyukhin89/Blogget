import PropTypes from 'prop-types';

export const IconSVG = props => {
  const { Icon, width = '100%', height = '100%' } = props;

  return <Icon height={height} width={width} />;
};

IconSVG.propTypes = {
  Icon: PropTypes.elementType,
  width: PropTypes.number | PropTypes.string,
  height: PropTypes.number | PropTypes.string,
};
