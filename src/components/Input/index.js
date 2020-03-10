import React from 'react'
import MaskedInput from 'react-text-mask'
import { numberMask } from '../../utils/masks'
import style from './styles.module.css'

export default function Input(props) {
  return (
    <div className={style.container}>
      <p className={style.placeholder}>
        <b>{props.placeholder}</b>
      </p>
      <MaskedInput 
        type={props.type || 'text'}
        className={style.input}
        onChange={props.onChange}
        required={props.required}
        name={props.name}
        mask={(props.type === 'number' || props.type === 'tel') && numberMask}
      />
    </div>
  )
}
