import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router'; // or 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { apiKey } from '../apikey/init'; // need apiKey from omdbId

export default function MovieInfo() {
    
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // get movie data with omdbId and apiKey
    async function getMovieData() {
        setLoading(true);
        try {
            const { data } = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=${apiKey}`);
            setMovie(data);
            console.log(data);
        } catch (error) {
            console.error("Error fetching deep data details on page:", error);
        } finally {
            setLoading(false);
        }
    }
    getMovieData();
  }, [id]);

  // if loading -- spinner
  if (loading) {
    return (
        <div className="container">
            <FontAwesomeIcon icon="spinner" className="spinner" spin size="3x" />
        </div>
    );
  }

  // if no movie
  if (!movie || movie.Response === "False") {
    return (
      <div className="container">
            <h2>Movie Not Found!</h2>
            <Link to="/movies" className="button">Back to Search</Link>
      </div>
    );
  }

  // if poster does not equal to N/A, then put movie poster else use the placeholder
  const poster = movie.Poster !== "N/A" ? movie.Poster : "https://placeholder.com";

  return (
    <div className="container">
        <div className="movie__row">
            <div className="book__selected--top">
                <Link to="/movies" className="movie__link">
                    <FontAwesomeIcon icon="arrow-left"/> Back to Movies
                </Link>
            </div>

            <div className="row">
                <div className="modal__movie--content">
                    <div className="modal__poster__left">
                        <img src={poster} alt={movie.Title} className="movie__poster" />
                    </div>

                    <div className="modal__description">
                        <h3 className="modal__title">{movie.Title}</h3>
                        
                        <div className="movie__ratings">
                            <FontAwesomeIcon icon="star" />
                            <span className='modal__rating'> {movie.imdbRating} / 10</span>
                        </div>

                        <div className="modal__meta">
                            <span className="modal__year">{movie.Year}</span> | 
                            <span className="modal__rated">{movie.Rated}</span> | 
                            <span className="modal__release">{movie.Released}</span> | 
                            <span className="modal__runtime">{movie.Runtime}</span>
                        </div>

                        <h4 className="modal__genre">{movie.Genre}</h4>
                        <p className="modal__plot">{movie.Plot}</p>

                        <div className="modal__cast">
                            <h4 className="modal__directors"><strong>Director:</strong> {movie.Director}</h4>
                            <h4 className="modal__writers"><strong>Writers:</strong> {movie.Writer}</h4>
                            <h4 className="modal__actors"><strong>Actors:</strong> {movie.Actors}</h4>
                            <h4 className="modal__boxoffice"><strong>Box Office:</strong> {movie.BoxOffice !== "N/A" ? movie.BoxOffice : "N/A"}</h4>
                        </div>
                        
                        <button className='button'>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
