import React from 'react'

import s from './style.module.css'

const ComponentFunc = (props) => {
  return <p className={s.text}>{props.str}</p>
}

export const ComponentMemoFunc = React.memo(ComponentFunc)
