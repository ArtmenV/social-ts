import React from 'react'
import { gql, useQuery } from '@apollo/client'

const GET_DOGS = gql`
  query GetDogs {
    dogs {
      id
      breed
    }
  }
`

export function Dogs(): any {
  const { loading, error, data } = useQuery(GET_DOGS)

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  return (
    <div>
      {/* <select name="dog">
        {data.dogs.map((dog) => (
          <option key={dog.id} value={dog.breed}>
            {dog.breed}
          </option>
        ))}
      </select> */}
      <ul>
        {data.dogs.map((dog: any) => (
          <li key={dog.id}>{dog.breed}</li>
        ))}
      </ul>
    </div>
  )
}
