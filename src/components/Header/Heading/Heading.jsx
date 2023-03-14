import React from 'react'
import PropTypes from 'prop-types'

import s from './Heading.module.css'

export const Heading = ({ text }) => {
  return <div className={s.heading}>{text}</div>
}

Heading.propTypes = {
  text: PropTypes.string,
}
