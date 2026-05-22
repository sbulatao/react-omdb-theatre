import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Browse() {
  return (
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
  )
}
