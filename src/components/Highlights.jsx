import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

// ADDED FEATURE -- IN PROGRESS

export default function Highlights() {
  return (
    <section id='highlights'>
        <div className="container">
            <div className="row">

                <h2 className='title__subtitle-1'>
                    Why choose <span className='highlights'> OMDb Theater</span>
                </h2>

                <div className="highlight__wrapper">
                    <div className="highlight">
                        <div className="highlight__img">
                            <FontAwesomeIcon icon="bolt"></FontAwesomeIcon>
                        </div>
                        <h3 className="highlight__subtitle"> Easy and Quick </h3>
                        <p className="highlight__para">
                            Get access to the movies you have selected online.
                        </p>
                    </div>

                    <div className="highlight">
                        <div className="highlight__img">
                            <FontAwesomeIcon icon="film"></FontAwesomeIcon>
                        </div>
                        <h3 className="highlight__subtitle"> 10,000+ Movies </h3>
                        <p className="highlight__para">
                            OMDb Theater has movies in all your favorite categories.
                        </p>
                    </div>

                    <div className="highlight">
                        <div className="highlight__img">
                            <FontAwesomeIcon icon="tags"></FontAwesomeIcon>
                        </div>
                        <h3 className="highlight__subtitle"> Affordable </h3>
                        <p className="highlight__para">
                            Get yoyr hands on popular movies.
                        </p>
                    </div>


                </div>

            </div>
        </div>
    </section>
      
  )
}
