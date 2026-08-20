import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
// import Movie from './ui/Movie'

export default function Featured() {


  return (
    <section id="features">
        <div className="container">
            <div className="row">

                <h2 className="title__subtitle-1">
                    Featured <span className="highlights">Movies</span>
                </h2>

                <div className="movies">
                    
                    <div className="movie">
                        <a href='/'>
                            <figure className='movie__poster--wrapper'>
                                <img src="https://m.media-amazon.com/images/M/MV5BNGNmNjI0ZmMtMzI5MC00ZjUyLWFlZDEtYjUyMGZlN2E3N2E2XkEyXkFqcGc@._V1_SX300.jpg" alt="" className="movie__poster"/>
                            </figure>
                        </a>
                        <div className="movie__title">
                            <a href="/" className="movie__title--link">
                                The Mask
                            </a>
                        </div>
                        <div className="movie__ratings">
                            <FontAwesomeIcon icon="star" />
                            <FontAwesomeIcon icon="star" />
                            <FontAwesomeIcon icon="star" />
                            <FontAwesomeIcon icon="star" />
                            <FontAwesomeIcon icon="star" />
                            <FontAwesomeIcon icon="star" />
                            <FontAwesomeIcon icon="star" />
                            {/* <FontAwesomeIcon icon="star-half-alt" /> */}
                        </div>
                        <div className="movie__price">
                            <span className='movie__price'>$119,938,730</span>
                        </div>
                    </div>

                    <div className="movie">
                        <a href='/'>
                            <figure className='movie__poster--wrapper'>
                                <img src="https://m.media-amazon.com/images/M/MV5BMTI5MDU3MTYyMF5BMl5BanBnXkFtZTYwODgyODc3._V1_SX300.jpg" alt="" className="movie__poster"/>
                            </figure>
                        </a>
                        <div className="movie__title">
                            <a href="/" className="movie__title--link">
                                The Cat in the Hat
                            </a>
                        </div>
                        <div className="movie__ratings">
                            <FontAwesomeIcon icon="star" />
                            <FontAwesomeIcon icon="star" />
                            <FontAwesomeIcon icon="star" />
                            <FontAwesomeIcon icon="star" />
                            {/* <FontAwesomeIcon icon="star-half-alt" /> */}
                        </div>
                        <div className="movie__price">
                            <span className='movie__price'>$101,149,285</span>
                        </div>
                    </div>

                    <div className="movie">
                        <a href='/'>
                            <figure className='movie__poster--wrapper'>
                                <img src="https://m.media-amazon.com/images/M/MV5BYzYyN2FiZmUtYWYzMy00MzViLWJkZTMtOGY1ZjgzNWMwN2YxXkEyXkFqcGc@._V1_QL75_UX380_CR0,2,380,562_.jpg" alt="" className="movie__poster"/>
                            </figure>
                        </a>
                        <div className="movie__title">
                            <a href="/" className="movie__title--link">
                                Titanic
                            </a>
                        </div>
                        <div className="movie__ratings">
                            <FontAwesomeIcon icon="star" />
                            <FontAwesomeIcon icon="star" />
                            <FontAwesomeIcon icon="star" />
                            <FontAwesomeIcon icon="star" />
                            <FontAwesomeIcon icon="star" />
                            <FontAwesomeIcon icon="star" />
                            <FontAwesomeIcon icon="star" />
                            <FontAwesomeIcon icon="star" />
                            {/* <FontAwesomeIcon icon="star-half-alt" /> */}
                        </div>
                        <div className="movie__price">
                            <span className='movie__price'>$674,354,882</span>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </section>
  )
}
