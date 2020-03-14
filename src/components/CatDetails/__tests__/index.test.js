import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import mock from '../../../utils/mock'
import { CatDetails } from '..'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useParams: () => ({
    id: 'dkp',
  }),
  useRouteMatch: () => ({ url: '/details/:id' }),
}))

const component = render(
  <Router>
    <CatDetails cats={mock.cats} />
  </Router>
)

afterEach(cleanup)

it('should take a snapshot of CatDetails', () => {
  expect(component).toMatchSnapshot()
})

it('should returns a width in gauges', () => {
  const { getByTestId } = render(
    <Router>
      <CatDetails cats={mock.cats} />
    </Router>
  )

  expect(getByTestId('curious-gauge')).toHaveStyle(`width: 10%`)
  expect(getByTestId('friendly-gauge')).toHaveStyle(`width: 10%`)
  expect(getByTestId('energetic-gauge')).toHaveStyle(`width: 10%`)

})

it('should have a cat in gallery footer', () => {
  const { getByTestId } = render(
    <Router>
      <CatDetails cats={mock.cats} />
    </Router>
  )

  expect(getByTestId('gallery').children).toHaveLength(1)
})
