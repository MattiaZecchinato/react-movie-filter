import { useState, useEffect } from 'react'

// film list
import filmList from '../data/film.json'

export default function Main() {

    // film list
    const [film, setFilmList] = useState(filmList);
    // select option
    const [optionGenre, setoptionGenre] = useState('');

    useEffect(() => {

        console.log(optionGenre);

        let filteredFilm;

        if (optionGenre === '') {

            filteredFilm = filmList;
        }
        else {

            filteredFilm = filmList.filter(elem => elem.genre === optionGenre);
        }

        setFilmList(filteredFilm);
    }, [optionGenre])

    return <>

        <p>Filter list film</p>

        <select onChange={e => setoptionGenre(e.target.value)}>
            <option value="">---</option>
            <option>Fantascienza</option>
            <option>Thriller</option>
            <option>Romantico</option>
            <option>Azione</option>
        </select>

        <hr />  

        {film.map((elem, i) => <div key={i}>
            <h3>{elem.title}</h3> 
            <p>{elem.genre}</p>
        </div>)}
    
    </>
    
}