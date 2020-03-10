// import React from 'react'
import { put, takeEvery } from 'redux-saga/effects'

function* addNewCat({ payload }) {
  try {
    yield put({ type: 'UPDATE_CAT_LIST', data: { ...payload } })
  } catch ({ message, response }) {
    // eslint-disable-next-line no-console
    console.warn('add generator ERROR', { message, response })
  }
}

export default function* loginSagas() {
  yield takeEvery('ADD_NEW_CAT', addNewCat)
}
