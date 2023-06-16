import React from 'react'
import { getClient } from "@/lib/client";

import { gql } from "@apollo/client";
const query = gql`
  query {
    characters {
      results {
        name
        status
      }
    }
  }
`;


export default async function CharacterList () {
    const { data } = await getClient().query({ query });
    console.log(data);
  return (
    <div>
        <h1>Rick and Morty Charcters</h1>
         {data.characters.results.map((character, index) => (
        <p key={index}>{character.name}</p>
      ))}
    </div>
  )
}

