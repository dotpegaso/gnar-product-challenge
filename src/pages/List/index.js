import React, { Component } from 'react'
import IMAGES from '../../constants/images'
import style from './style.module.css'
import Header from '../../components/Header'

export default class List extends Component {
  render() {
    return (
      <>
      <Header action="add" actionTitle="ADD NEW CAT" search />

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
            <li className={style.item}>
              <div className={style.catBasicInfo}>
                <img className={style.catPhoto} src={IMAGES.CAT} alt="Cat" />
                <span className={style.catName}>Fluffly Jenkins</span>
              </div>
              <span className={style.catProperties}>
                <b>Age:</b> 3 years
              </span>
              <span className={style.catProperties}>
                <b>Favorite activity:</b> Eating
              </span>
              <span className={style.catProperties}>
                <b>Pet peave:</b> Hairballs
              </span>
            </li>

            <li className={style.item}>
              <div className={style.catBasicInfo}>
                <img className={style.catPhoto} src={IMAGES.CAT} alt="Cat" />
                <span className={style.catName}>Fluffly Jenkins</span>
              </div>
              <span className={style.catProperties}>
                <b>Age:</b> 3 years
              </span>
              <span className={style.catProperties}>
                <b>Favorite activity:</b> Eating
              </span>
              <span className={style.catProperties}>
                <b>Pet peave:</b> Hairballs
              </span>
            </li>

            <li className={style.item}>
              <div className={style.catBasicInfo}>
                <img className={style.catPhoto} src={IMAGES.CAT} alt="Cat" />
                <span className={style.catName}>Fluffly Jenkins</span>
              </div>
              <span className={style.catProperties}>
                <b>Age:</b> 3 years
              </span>
              <span className={style.catProperties}>
                <b>Favorite activity:</b> Eating
              </span>
              <span className={style.catProperties}>
                <b>Pet peave:</b> Hairballs
              </span>
            </li>

            <li className={style.item}>
              <div className={style.catBasicInfo}>
                <img className={style.catPhoto} src={IMAGES.CAT} alt="Cat" />
                <span className={style.catName}>Fluffly Jenkins</span>
              </div>
              <span className={style.catProperties}>
                <b>Age:</b> 3 years
              </span>
              <span className={style.catProperties}>
                <b>Favorite activity:</b> Eating
              </span>
              <span className={style.catProperties}>
                <b>Pet peave:</b> Hairballs
              </span>
            </li>

            <li className={style.item}>
              <div className={style.catBasicInfo}>
                <img className={style.catPhoto} src={IMAGES.CAT} alt="Cat" />
                <span className={style.catName}>Fluffly Jenkins</span>
              </div>
              <span className={style.catProperties}>
                <b>Age:</b> 3 years
              </span>
              <span className={style.catProperties}>
                <b>Favorite activity:</b> Eating
              </span>
              <span className={style.catProperties}>
                <b>Pet peave:</b> Hairballs
              </span>
            </li>

            <li className={style.item}>
              <div className={style.catBasicInfo}>
                <img className={style.catPhoto} src={IMAGES.CAT} alt="Cat" />
                <span className={style.catName}>Fluffly Jenkins</span>
              </div>
              <span className={style.catProperties}>
                <b>Age:</b> 3 years
              </span>
              <span className={style.catProperties}>
                <b>Favorite activity:</b> Eating
              </span>
              <span className={style.catProperties}>
                <b>Pet peave:</b> Hairballs
              </span>
            </li>

            <li className={style.item}>
              <div className={style.catBasicInfo}>
                <img className={style.catPhoto} src={IMAGES.CAT} alt="Cat" />
                <span className={style.catName}>Fluffly Jenkins</span>
              </div>
              <span className={style.catProperties}>
                <b>Age:</b> 3 years
              </span>
              <span className={style.catProperties}>
                <b>Favorite activity:</b> Eating
              </span>
              <span className={style.catProperties}>
                <b>Pet peave:</b> Hairballs
              </span>
            </li>

            <li className={style.item}>
              <div className={style.catBasicInfo}>
                <img className={style.catPhoto} src={IMAGES.CAT} alt="Cat" />
                <span className={style.catName}>Fluffly Jenkins</span>
              </div>
              <span className={style.catProperties}>
                <b>Age:</b> 3 years
              </span>
              <span className={style.catProperties}>
                <b>Favorite activity:</b> Eating
              </span>
              <span className={style.catProperties}>
                <b>Pet peave:</b> Hairballs
              </span>
            </li>

            <li className={style.item}>
              <div className={style.catBasicInfo}>
                <img className={style.catPhoto} src={IMAGES.CAT} alt="Cat" />
                <span className={style.catName}>Fluffly Jenkins</span>
              </div>
              <span className={style.catProperties}>
                <b>Age:</b> 3 years
              </span>
              <span className={style.catProperties}>
                <b>Favorite activity:</b> Eating
              </span>
              <span className={style.catProperties}>
                <b>Pet peave:</b> Hairballs
              </span>
            </li>
          </ul>
        </section>
      </section>
      </>
    )
  }
}
