/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import Input from '../Input'
import style from './styles.module.css'

class NewCat extends Component {
  render(){
    return (
      <form className={style.form}>
        <h1 className={style.title}>ADD NEW CAT</h1>
        <p className={style.subtitle}>
          <b>Cat</b>
        </p>
        <Input placeholder="Name" />
        <Input placeholder="Age" type="tel" />
        <Input placeholder="Favorite Activity" />
        <Input placeholder="Pet Peave" />

        <p className={style.subtitle}>
          <b>Ownership</b>
        </p>
        <Input placeholder="Location" />
        <Input placeholder="Organization" />
        <Input placeholder="Medical record" type="file" />
      </form>
    )
  }
}

export default NewCat
