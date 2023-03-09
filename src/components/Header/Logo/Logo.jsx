import React from 'react'
import s from './Logo.module.css'
import logo from './img/logo.svg'

export const Logo = (props) => {
  return (
    <a className={s.link} href="/">
      <img className={s.logo} src={logo} alt="Blogget's logo" />
    </a>
  )
}
