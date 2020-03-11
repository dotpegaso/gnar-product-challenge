import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { handleSearch } from '../../utils/helpers'
import style from './styles.module.css'
import IMAGES from '../../constants/images'

function EmptyPlaceholder() {
  return (
    <img className={style.emptyList} src={IMAGES.PURRRHAPS} alt="Empty list" />
  )
}

function List(props) {

  const { searchString, cats } = props
  const catList = handleSearch(searchString, cats)

  return (
    <section className={style.list}>
      <h1 className={style.title}>CAT LIST</h1>
      <ul className={style.content}>
        { catList.length === 0 ? <EmptyPlaceholder /> : catList.reverse().map(cat => (
          <li key={cat.id}>
            <Link to={`/details/${cat.id}`} className={style.item}>
              <div className={style.catBasicInfo}>
                <img className={style.catPhoto} src={cat.photo || IMAGES.ICON} alt="Cat" />
                <b className={style.catName}>{cat.name}</b>
              </div>
              <span className={style.catProperties}>
                <b>Age: </b> 
                {`${cat.age} years`}
              </span>
              <span className={style.catProperties} title={cat.activity}>
                <b>Favorite activity: </b> 
                {cat.activity}
              </span>
              <span className={style.catProperties} title={cat.peave}>
                <b>Pet peave: </b> 
                {cat.peave}
              </span>
            </Link>
          </li>
      ))}
      </ul>
    </section>
  )
}

const mapStateToProps = state => ({
  state,
  searchString: state.header.searchString,
  cats: state.list.cats,
})

export default connect(mapStateToProps)(List)
