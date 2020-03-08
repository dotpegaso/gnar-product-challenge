import React from 'react'
import style from './style.module.css'
import IMAGES from '../../constants/images'

export default function Header(props) {

  const toHomescreen = () => {
    window.location = '/'
  }

  return (
    <header className={style.header}>
      <button onClick={toHomescreen} className={style.btnLogo}>
        <img src={IMAGES.LOGO} alt="Purrrfect Logo" />
      </button>
      
      {props.search && (
        <input type="search" placeholder="Search cats" onChange={props.searchCallback} className={style.search} />
      )}

      {props.action && props.action === 'add' && (
        <button type="button" onClick={props.actionCallback} className={style.action}>
          <img src={IMAGES.PLUS} className={style.plus} alt="Plus icon" />
          {props.actionTitle}
        </button>
      )}
    </header>
  )
}
