---
to: <%= absPath %>/<%= component_name %>.jsx
---
import React from 'react'
import s from './<%= component_name %>.module.css'

export const <%= component_name %> = props => {
    return <div className={s.container}></div>
}