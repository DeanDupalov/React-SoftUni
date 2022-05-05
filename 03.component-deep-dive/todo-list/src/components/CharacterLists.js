import { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';


const CharacterList = () => {
    const swapiUrl = 'https://swapi.dev/api/people';
    const {state: characters, isLoading, error} = useFetch(swapiUrl);

    return (
        <ul>
            {characters.map(x => <li key={x.name}>{x.name}</li>)}
        </ul>
    )
}


export default CharacterList