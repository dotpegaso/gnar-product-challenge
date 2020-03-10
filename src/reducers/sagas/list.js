// import React from 'react'
import { put, takeEvery } from 'redux-saga/effects'
import Swal from 'sweetalert2'

function* addNewCat({ payload }) {
  try {
    yield put({ type: 'UPDATE_CAT_LIST', data: { ...payload } })

    Swal.fire({
      icon: 'success',
      title: 'Furrrmidable!',
      text: 'A new cat was added to the list',
      showConfirmButton: false,
      timer: 4000,
      timerProgressBar: true,
      footer: `Redirecting you back to the main page`,
      onClose: () => {
        window.location = '/'
      }
    })

  } catch ({ message, response }) {
    // eslint-disable-next-line no-console
    console.warn('add generator ERROR', { message, response })

    Swal.fire({
      icon: 'error',
      title: 'Unfurrrtunately',
      text: 'Something went wrong',
      showConfirmButton: false,
      timer: 4000,
      timerProgressBar: true,
      footer: `Refreshing the page, try it again`,
      onClose: () => {
        window.location = '/add'
      }
    })
  }
}

export default function* loginSagas() {
  yield takeEvery('ADD_NEW_CAT', addNewCat)
}
