import React from 'react'
import s from './Heading.module.css'

export const Heading = ({ text }) => {
  return <div className={s.heading}>{text}</div>
}
