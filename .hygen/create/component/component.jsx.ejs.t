---
to: <%= absPath %>/<%= component_name %>.jsx
---
import s from './<%= component_name %>.module.css'

export const <%= component_name %> = () => {
    return <div className={s.container}></div>    
}