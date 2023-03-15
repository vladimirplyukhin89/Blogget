import PropTypes from 'prop-types'

import s from './Button.module.css'

export const Button = ({ text }) => {
  return <button className={s.container}>{text}</button>
}

Button.propTypes = {
  text: PropTypes.string,
}
