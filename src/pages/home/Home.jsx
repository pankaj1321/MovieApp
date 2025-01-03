import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./Home.css"; // Ensure you have this CSS file for additional styling
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import MovieList from '../movielist/Movie';


function Home() {
  const [moviedata, setMoviedata] = useState([])
  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=5544aa43cd7cb343520f1c72f13d0925")
      .then(res => res.json())
      .then(data => setMoviedata(data.results))
  }, [])



  return (
    <>
      <div className='poster'>
        {moviedata.length > 0 && (
          <Carousel
            key={moviedata.id}
            showThumbs={false}
            autoPlay={true}
            interval={4000}
            infiniteLoop={true}
            showStatus={false}
            stopOnHover={false}
          >
            {moviedata.map(movie => (
              <Link key={movie.id} style={{ textDecoration: "none", color: "white" }} to={`/movie/${movie.id}`}>
                <div className='posterImage'>
                  <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                </div>
                <div className="posterImage__overlay">
                  <div className="posterImage__title">
                    {movie ? movie.original_title : ""}
                  </div>
                  <div className="posterImage__runtime">
                    {movie ? movie.release_date : ""}
                    <span className="posterImage__rating">
                      {movie ? movie.vote_average : ""}
                      <i className="fas fa-star" />{" "}
                    </span>
                  </div>
                  <div className="posterImage__description">{movie ? movie.overview : ""}</div>

                </div>
              </Link>
            ))}
          </Carousel>

        )}
      <MovieList />
      </div>
    </>







  )
}

export default Home