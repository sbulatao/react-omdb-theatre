import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom'; // for the search bar to go to /movie and dynamically spawn
import UndrawMovie from '../assets/undraw_horror-movie_9020.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Landing() {

    const [landingSearch, setLandingSearch] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if(!landingSearch.trim()) return;

        // save search from landing
        localStorage.setItem("Title", landingSearch);
        // goes to /movies
        navigate('/movies'); 
    };

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
                        {/* <div className="search__bar"> */}
                        <form onSubmit={handleSearch} className="search__bar">
                            <input 
                                type="text" 
                                id="movie" 
                                name="" 
                                placeholder="Search by Movie Title or a valid OMDb ID"
                                value={landingSearch}
                                onChange={e => setLandingSearch(e.target.value)}
                            />
                            <button type="submit" className="search__button">
                                <FontAwesomeIcon icon="search"></FontAwesomeIcon>
                            </button>
                            </form>
                        {/* </div> */}
                    </div>

                    {/* IMG */}
                    <div className="img__container title__subtitle-1">
                        <img src={UndrawMovie} alt="movie time" className="movie__time"/>
                    </div>

                </div>
            </div>
        </header>
    </section>
  )
}
