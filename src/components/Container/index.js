import React from 'react'
import style from './styles.module.css'

export default function Container(props) {
  return (
    <section className={style.container}>
      {props.children}
    </section>
  )
}
