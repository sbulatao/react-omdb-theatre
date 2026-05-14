import React from 'react'
import { Link } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Movie() {
    
  return (
    <div className="movie">

        <Link to="">
            <figure className='movie__poster--wrapper'>
                <img src="https://m.media-amazon.com/images/M/MV5BNGNmNjI0ZmMtMzI5MC00ZjUyLWFlZDEtYjUyMGZlN2E3N2E2XkEyXkFqcGc@._V1_SX300.jpg" alt="" className="movie__poster" />
            </figure>
        </Link>

        <div className="movie__title">The Mask</div>
        <div className="movie__year">1994</div>

        {/* 7.5 Out of 10 */}
        <div className="movie__ratings">
            <FontAwesomeIcon icon="star"></FontAwesomeIcon>
            <FontAwesomeIcon icon="star"></FontAwesomeIcon>
            <FontAwesomeIcon icon="star"></FontAwesomeIcon>
            <FontAwesomeIcon icon="star"></FontAwesomeIcon>
            <FontAwesomeIcon icon="star"></FontAwesomeIcon>
            <FontAwesomeIcon icon="star"></FontAwesomeIcon>
            <FontAwesomeIcon icon="star"></FontAwesomeIcon>
            <FontAwesomeIcon icon="star-half"></FontAwesomeIcon>
        </div>

        <div className="boxoffice__price">$48,230,162</div>

    </div>
  )
}
