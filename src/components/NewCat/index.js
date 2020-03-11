/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import { connect } from 'react-redux' 
import Input from '../Input'
import style from './styles.module.css'
import IMAGES from '../../constants/images'

class NewCat extends Component {
  render(){

    const handleChange = ev => {
      const { name, value } = ev.target
      this.setState({ [name]: value })
    }

    const handleSubmit = e => {
      e.preventDefault()
      document.querySelector('#submit').disabled = true
      
      const { ...state } = this.state
      const { addNewCat, cats } = this.props
      
      addNewCat({ cats, state })
    }

    return (
      <form className={style.form} onSubmit={handleSubmit}>
        <h1 className={style.title}>ADD NEW CAT</h1>
        <p className={style.subtitle}>
          <b>Cat</b>
        </p>
        <Input name="name" onChange={handleChange} placeholder="Name" required />
        <Input name="age" onChange={handleChange} placeholder="Age" type="tel" required />
        <Input name="activity" onChange={handleChange} placeholder="Favorite Activity" required />
        <Input name="peave" onChange={handleChange} placeholder="Pet Peave" required />

        <p className={style.subtitle}>
          <b>Ownership</b>
        </p>
        <Input name="location" onChange={handleChange} placeholder="Location" />
        <Input name="organization" onChange={handleChange} placeholder="Organization" />
        <Input name="medRecord" onChange={handleChange} placeholder="Medical record" type="file" />

        <button id="submit" type="submit" className={style.submit}>
          NEXT
          <img src={IMAGES.RIGHT_CHEVRON} alt="Right arrow" />
        </button>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  state,
  cats: state.list.cats,
})

const mapDispatchToProps = dispatch => ({
  addNewCat(payload) {
    dispatch({ type: 'ADD_NEW_CAT', payload })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(NewCat)
