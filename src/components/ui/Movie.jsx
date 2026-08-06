import React from 'react'
import { Link } from 'react-router'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Movie({ movie }) {

    const poster = movie.Poster !== "N/A" ? movie.Poster : "https://placeholder.com";

     return (
    // route to the specific movie's ID to open movie info
    <Link to={`/movies/${movie.imdbID}`} className="movie-link-wrapper">

        <div className="movie">
            <figure className='movie__poster--wrapper'>
                <img src={poster} alt={movie.Title} className="movie__poster" />
                <div className="movie__id">{movie.imdbID}</div>
            </figure>
            
            <div className="movie__title">{movie.Title}</div>
            <div className="movie__year">{movie.Year}</div>
            
            {/* <div className="movie__ratings">
                Click for rating <FontAwesomeIcon icon="star" />
            </div> */}

            {/* <div className="boxoffice__price">{movie.BoxOffice || "Click for Box Office pricing $"}</div> */}

        </div>
    </Link>
  );
}
