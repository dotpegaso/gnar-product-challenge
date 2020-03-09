// import React from 'react'
import { put, takeEvery } from 'redux-saga/effects'

function* add({ payload }) {
  try {
    yield put({ type: 'ADD_INSERT_DATA', data: { ...payload } })
  } catch ({ message, response }) {
    // eslint-disable-next-line no-console
    console.warn('add generator ERROR', { message, response })
  }
}

export default function* loginSagas() {
  yield takeEvery('ADD', add)
}
