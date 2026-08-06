import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

// Parent::Movies.jsx -- searchTerm onSearchChange
export default function Browse({ searchTerm, onSearchChange }) {
  return (
        <section id="browse__input">
            <div className="container">
                <div className="row">
                    
                    <h1 className="title">Browse Our Movies</h1>
                    <div className="browse__input--wrapper">
                        {/* <!-- SEARCH BAR HERE --> */}
                        <div className="search__bar">
                            <input 
                                type="text" 
                                id="movie" 
                                name="" 
                                placeholder="Search by Movie Title or a valid OMDb ID" 
                                value={searchTerm}
                                onChange={onSearchChange} //fetches movies
                            /> 

                            <button type="submit" className="search__button spinner">
                                <FontAwesomeIcon icon="search"></FontAwesomeIcon>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
  )
}
