import React from 'react';
import UndrawMovie from '../assets/undraw_horror-movie_9020.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Landing() {
  return (
    <section id="landing">
        <header>
            <div className="container">
                <div className="row">

                    <div className="content--wrapper">
                        <h1 className="title">
                            Australia's Most Awarded Movie Subscription Platform
                        </h1>
                        <h2 className="title__subtitle">
                            FIND YOUR DREAM MOVIE WITH <span className="highlights">OMDb Theater</span>
                        </h2>

                        {/* SEARCH BAR HERE */}
                        <div className="search__bar">
                            <input type="text" id="movie" name="" placeholder="Search by Movie Title or a valid OMDb ID"/>
                            <button type="submit" className="search__button">
                                <FontAwesomeIcon icon="search"></FontAwesomeIcon>
                            </button>
                        </div>
                    </div>

                    {/* IMG */}
                    <div className="img__container">
                        <img src={UndrawMovie} alt="movie time" className="movie__time"/>
                    </div>

                </div>
            </div>
        </header>
    </section>
  )
}
