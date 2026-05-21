import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Movies() {
  return (
    <>
    <main>

        <section id="browse__input">
            <div className="container">
                <div className="row">
                    
                    <h1 className="title">Browse Our Movies</h1>
                    <div className="browse__input--wrapper">
                        {/* <!-- SEARCH BAR HERE --> */}
                        <div className="search__bar">
                            <input type="text" id="movie" name="" placeholder="Search by Movie Title or a valid OMDb ID" /> 
                            {/* onChange="onSearchChange(event)" */}

                            <button type="submit" className="search__button spinner">
                                <FontAwesomeIcon icon="search"></FontAwesomeIcon>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <section id="movies__main">
            <div className="container">
                <div className="row">

                    <h2>All Movies</h2>

                    <div className="movies__filter">
                         <select name="" id="filter"> {/* onChange="filterMovies(event) */}
                            <option value="" disabled selected>Sort</option>
                            <option value="A_TO_Z">A to Z</option>
                            <option value="Z_TO_A">Z to A</option>
                            <option value="ASCENDING_YEAR">Ascending Year</option>
                            <option value="DESCENDING_YEAR">Descending Year</option>
                        </select>
                    </div>

                    {/* <!-- Dynamic Spawning Point for Movies HERE --> */}
                    <div className="search-results"> 
                        {/* <!-- movies --> */}
                        <FontAwesomeIcon icon="spinner" className='spinner movies__loading--spinner'></FontAwesomeIcon>

                        <div className="movie"> 
                         {/* onClick="showMovieDetails(id)" */}
                            <figure className="movie__poster--wrapper">
                                <img className="movie__poster"/>
                                <div className="movie__id"></div>
                            </figure>
                            <div className="movie__title"></div>
                            <div className="movie__year"></div>
                        </div>

                    </div>
                
                </div>
            </div>
        </section>

    </main>
    </>

    
  )
}
