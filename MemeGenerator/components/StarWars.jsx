import { useEffect, useState } from "react"

export default function StarWars(){
    const [count, setCount] = useState(1)
    const [StarWarsData, setStarWarsData] = useState({})

    useEffect(() => {
        fetch(`https://swapi.py4e.com/api/people/${count}`)
        .then(response => response.json())
        .then(data => setStarWarsData(data))
    }, [count])

    function getNext(){
        setCount(prevCount => prevCount + 1)
    }

    return (
        <>
        <button onClick={getNext}>Next</button>
        <p>{JSON.stringify(StarWarsData, null, 2)}</p>
        </>
    )
}