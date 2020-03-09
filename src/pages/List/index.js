import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import IMAGES from '../../constants/images'
import style from './style.module.css'
import Header from '../../components/Header'

class List extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchResult: null,
      cats: [
        {
          id: 0,
          photo: IMAGES.CAT,
          name: 'Fluffy Jenkins',
          age: 3,
          activity: 'Eating',
          peave: 'Hairballs'
        },
        {
          id: 1,
          photo: IMAGES.CAT,
          name: 'Floffy Wenkins',
          age: 3,
          activity: 'Sleep',
          peave: 'Hairballs'
        },
        {
          id: 2,
          photo: IMAGES.CAT,
          name: 'Groopy Phenxis',
          age: 3,
          activity: 'Poop',
          peave: 'Hairballs'
        }
      ]
    }
  }

  render() {
    const { searchResult, cats } = this.state
    const catList = searchResult || cats

    const handleSearch = e => {
      const { value } = e.target
      const filteredData = cats.map( 
        catObj => Object.values(catObj).filter( 
          objValue => 
            objValue.toString().toLowerCase().includes(
              value.toString().toLowerCase()
            ) )
          .length > 0 && catObj )
        .filter(Boolean)

      this.setState({ searchResult: filteredData })
    }

    return (
      <>
        <Header 
          action="add" 
          actionTitle="ADD NEW CAT" 
          searchCallback={handleSearch}
        />

        <section className={style.container}>
          <aside className={style.aside}>
            <h2 className={style.title}>CAT FEED</h2>
            <ul className={style.content}>
              <li className={style.item}>How to find the purrrfect pet</li>
              <li className={style.item}>What to do with your new cat</li>
              <li className={style.item}>How to potty-train your cat</li>
              <li className={style.item}>How to find the purrrfect pet</li>
              <li className={style.item}>What to do with your new cat</li>
              <li className={style.item}>How to potty-train your cat</li>
              <li className={style.item}>How to find the purrrfect pet</li>
              <li className={style.item}>What to do with your new cat</li>
              <li className={style.item}>How to potty-train your cat</li>
              <li className={style.item}>How to find the purrrfect pet</li>
              <li className={style.item}>What to do with your new cat</li>
            </ul>
          </aside>

          <section className={style.list}>
            <h1 className={style.title}>CAT LIST</h1>
            <ul className={style.content}>
              { catList && catList.map(cat => (
                <li key={cat.id}>
                  <Link to={`/details/${cat.id}`} className={style.item}>
                    <div className={style.catBasicInfo}>
                      <img className={style.catPhoto} src={cat.photo} alt="Cat" />
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
        </section>
      </>
    )
  }
}

export default List
