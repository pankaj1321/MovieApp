import React, {useEffect, useState} from "react"
import "./Movie.css"
import { useParams } from "react-router-dom"
import Card from "../../component/header/card/Card"
const MovieList = () => {
    
    const [movieList, setMovieList] = useState([])
    const {type} = useParams()

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        getData()
    }, [type])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type? type :"popular"}?api_key=5544aa43cd7cb343520f1c72f13d0925`)
        .then(res => res.json())
        .then(data => setMovieList(data.results))
    }

    return (
        <div className="movie__list">
            <h2 className="list__title">{(type? type : "POPULAR").toUpperCase()}</h2>
            <div className="list__cards">
                {
                    movieList.map(movie => (
                        <Card key={movie.id} movie={movie} />
                    ))
                }
            </div>
        </div>
    )
}

export default MovieList