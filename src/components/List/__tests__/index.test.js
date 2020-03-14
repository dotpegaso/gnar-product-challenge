import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import mock from '../../../utils/mock'
import { List } from '..'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useParams: () => ({
    id: 'dkp',
  }),
  useRouteMatch: () => ({ url: '/details/:id' }),
}))

afterEach(cleanup)

const component = render(
  <Router>
    <List cats={mock.cats} searchString />
  </Router>
)

it('should take a snapshot of List', () => {
  expect(component).toMatchSnapshot()
})

it('should 2 have cats in the list', () => {
  const { getByTestId } = render(
    <Router>
      <List cats={mock.cats} searchString="" />
    </Router>
  )
  expect(getByTestId('cats').children).toHaveLength(2)
})

it('should show the empty list message', () => {
  const { getByTestId } = render(
    <Router>
      <List cats={[]} searchString />
    </Router>
  )
  expect(getByTestId('cats').children).toHaveLength(1)
})
