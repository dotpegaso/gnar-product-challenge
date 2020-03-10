import React from 'react'
import style from './styles.module.css'

export default function Input(props) {
  return (
    <div className={style.container}>
      <p className={style.placeholder}>
        <b>{props.placeholder}</b>
      </p>
      <input 
        type={props.type || 'text'}
        className={style.input}
        onChange={props.onChange}
        required={props.required}
        name={props.name}
      />
    </div>
  )
}
