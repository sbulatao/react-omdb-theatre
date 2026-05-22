import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

export default function MovieInfo() {
  return (
    <div className="container">
        <div className="movie__row">
            <div className="book__selected--top">
                <Link to="/movies" className="movie__link">
                    <FontAwesomeIcon icon="arrow-left"/>
                </Link>

                <Link to="/movies" className="movie__link">
                    <h2 className="book__selected--title--top">Movies</h2>
                </Link>
            </div>

            <div className="row">
            <div className="modal__movie--content">
                {/* <FontAwesomeIcon icon="times" className='modal_exit click'></FontAwesomeIcon>  */}
                {/* onclick="closeMovieModal() */}

                <div className="modal__poster__left">
                    <img src="https://m.media-amazon.com/images/M/MV5BNGNmNjI0ZmMtMzI5MC00ZjUyLWFlZDEtYjUyMGZlN2E3N2E2XkEyXkFqcGc@._V1_SX300.jpg" alt="" className="movie__poster" />
                </div>
                
                <div className="modal__description">
                    <h3 className="modal__title">
                        The Mask
                    </h3>
                    <span className='modal__rating'>7.5 STARS</span> {/* ADDED RATING */}

                    <div className="modal__meta">
                        <span className="modal__year">1994</span> | 
                        <span className="modal__rated">PG-13</span> | 
                        <span className="modal__release">29 JUL 1994</span> |
                        <span className="modal__runtime">101 mins</span>
                    </div>

                    <h4 className="modal__genre">Comedy, Crime, Fantasy</h4>
                    <p className="modal__plot">Bank clerk Stanley Ipkiss is transformed into a manic superhero when he wears a mysterious mask.</p>

                    <div className="modal__cast">
                        <h4 className="modal__directors">Chuck Russell</h4>
                        <h4 className="modal__writers">Michael Fallon, Mark Verheiden, Mike Werb</h4>
                        <h4 className="modal__actors">Jim Carrey, Cameron Diaz, Peter Riegert</h4>
                    </div>

                    <button className='button'>Add to Cart</button>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}
