import React from 'react'
import Container from '../../components/Container'
import Header from '../../components/Header'
import Feed from '../../components/Feed'
import List from '../../components/List'

function Home() {
  return (
    <>
      <Header 
        action="add" 
        actionTitle="ADD NEW CAT" 
        searchable
      />
      <Container>
        <Feed />
        <List />
      </Container>
    </>
  )
}

export default Home
