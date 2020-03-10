import React from 'react'
import style from './styles.module.css'
import Container from '../../components/Container'
import Header from '../../components/Header'
import NewCat from '../../components/NewCat'

function Add() {
  return (
    <>
      <Header />

      <Container>
        <div className={style.card}>
          <h1 className={style.disclaimer}>
            Help Make a Purrrfect Match.
          </h1>
        </div>
        <div className={style.card}>
          <NewCat />
        </div>
      </Container>
    </>
  )
}

export default Add
