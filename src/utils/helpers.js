/* eslint-disable import/prefer-default-export */
export function handleSearch(searchString, array) {
    const filteredData = array.map( 
      catObj => Object.values(catObj).filter( 
        objValue => 
          objValue.toString().toLowerCase().includes(
            searchString.toString().toLowerCase()
          ) )
      .length > 0 && catObj )
    .filter(Boolean)

  return filteredData
}

// eslint-disable-next-line consistent-return
export async function handleCatPhotos(limit) {
  try {
    const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=${limit || 1}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'text/plain',
        'x-api-key': 'bfc37c2b-fdfa-4644-bc60-22993d2f06c1',
      }
    })
    return await response.json()
  } catch (error) {
    // todo
  }
}
