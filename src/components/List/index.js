import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { handleSearch, handleCatPhotos } from '../../utils/helpers'
import style from './styles.module.css'
import IMAGES from '../../constants/images'

function List(props) {
  const [catPhotos, setCatPhotos] = useState([])

  const { searchString, cats } = props
  const catList = handleSearch(searchString, cats)

  if(catPhotos.length === 0){
    handleCatPhotos(catList.length).then(data => {
      setCatPhotos(data.map(item => item.url))
    })
  }    
  
  return (
    <section className={style.list}>
      <h1 className={style.title}>CAT LIST</h1>
      <ul className={style.content}>
        { catList && catList.map((cat, index) => (
          <li key={cat.id}>
            <Link to={`/details/${cat.id}`} className={style.item}>
              <div className={style.catBasicInfo}>
                <img className={style.catPhoto} src={catPhotos[index] || IMAGES.ICON} alt="Cat" />
                <span className={style.catName}>{cat.name}</span>
              </div>
              <span className={style.catProperties}>
                <b>Age: </b> 
                {`${cat.age} years`}
              </span>
              <span className={style.catProperties}>
                <b>Favorite activity: </b> 
                {cat.activity}
              </span>
              <span className={style.catProperties}>
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
