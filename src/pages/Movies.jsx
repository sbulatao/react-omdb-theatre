import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Movie from '../components/ui/Movie'
import Browse from '../components/Browse'

const apiKey = "e687b801";

export default function Movies() {

    // const [movies, setMovies] = useState([]);
    // const [selectedMovie, setSelectedMovie] = useState([]);
    // const [searchTerm, setSearchTerm] = useState(null);
    // const [movies__loading, setLoading] = useState(false);
    // const [isDarkTheme, setIsDarkTheme] = useState(false);

    useEffect(() => {
        // const savedTheme = localStorage.getItem("theme");

        // if (savedTheme === "dark") {
        //     setIsDarkTheme(true);
        //     document.body.classList.add("dark-theme");
        // }
    }, []);

  return (
    <>
    <main>
        <Browse />

        <section id="movies__main">
            <div className="container">
                <div className="row">

                    <h2>All Movies</h2>

                    <div className="movies__filter">
                         <select name="" id="filter"> {/* onChange="filterMovies(event) */}
                            <option value="" disabled default>Sort</option>
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

                        <Movie />
                    </div>
                
                </div>
            </div>
        </section>

    </main>
    </>

  )
}
