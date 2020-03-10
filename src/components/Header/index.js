import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import style from './styles.module.css'
import IMAGES from '../../constants/images'

function Header(props) {

  const toHomescreen = () => {
    window.location = '/'
  }

  const handleChange = ev => {
    const { value: searchString } = ev.target
    props.updateSearchString({ searchString })
  }

  return (
    <header className={style.header}>
      <button type="button" onClick={toHomescreen} className={style.btnLogo}>
        <img src={IMAGES.LOGO} alt="Purrrfect Logo" />
      </button>
      
      <div className={style.actions}>
        <>
          {props.searchable && (
            <input
              type="search" 
              placeholder="Search cats" 
              onChange={handleChange} 
              className={style.search} 
            />
          )}

          {props.action === 'add' && (
            <Link to={`/${props.action}`} onClick={props.actionCallback} className={style.action}>
              <img src={IMAGES.PLUS} className={style.plus} alt="Plus icon" />
              {props.actionTitle}
            </Link>
          )}
        </>
      </div>
    </header>
  )
}

const mapStateToProps = state => ({
  state,
  header: state.header,
})

const mapDispatchToProps = dispatch => ({
  updateSearchString(payload) {
    dispatch({ type: 'UPDATE_SEARCH_STRING', payload })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
