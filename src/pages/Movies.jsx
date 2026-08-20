import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Movie from '../components/ui/Movie'
import Browse from '../components/Browse'
import axios from 'axios'
import { apiKey } from '../apikey/init' // need apiKey from omdbId

export default function Movies() {

    // get data, search tracking, loading
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(false);

    // fetch movies
    useEffect(() => {
        const savedTitle = localStorage.getItem("Title");
        if (savedTitle) {
            setSearchTerm(savedTitle);
            fetchMovies(savedTitle);
        }
    }, []);

    // updates the movie search ahhhhh finally...
    useEffect(() => {
        if(searchTerm.trim()){
            localStorage.setItem("Title", searchTerm);
        }
    }, [searchTerm]);

    // update input, searching
    const onSearchChange = (event) => {
        const title = event.target.value.trim();
        setSearchTerm(title);
        fetchMovies(title);
    };

    // fetch movie by string
    const fetchMovies = async (title) => {
        if (!title.trim()) return;
        setLoading(true);
        
        // try fetching data from title string
        try {
            const { data } = await axios.get(`https://www.omdbapi.com/?s=${title}&apikey=${apiKey}`);
            
            if (data && data.Search) {
                setMovies(data.Search);
            } else {
                setMovies([]); // no movies found
            }
        } catch (error) {
            console.error("Error fetching movies list:", error);
        } finally {
            setLoading(false);
        }
    };

    // filters movies from dropdown
    const filterMovies = (event) => {
        const filter = event.target.value;
        if (!movies || movies.length === 0) return;

        // new array for updates
        let sortedMovies = [...movies];

        if (filter === "A_TO_Z") {
            sortedMovies.sort((a, b) => a.Title.localeCompare(b.Title));
        } else if (filter === "Z_TO_A") {
            sortedMovies.sort((a, b) => b.Title.localeCompare(a.Title));
        } else if (filter === "ASCENDING_YEAR") {
            sortedMovies.sort((a, b) => Number(a.Year) - Number(b.Year));
        }else if (filter === "DESCENDING_YEAR") {
            sortedMovies.sort((a, b) => Number(b.Year) - Number(a.Year));
        }

        setMovies(sortedMovies);
    };

  return (
    <>
    <main>
        <Browse searchTerm={searchTerm} onSearchChange={onSearchChange} />

        <section id="movies__main">
            <div className="container">
                <div className="row">

                    <h2>All Movies</h2>

                    <div className="movies__filter">
                        {/* FILTER HERE */}
                         <select name="" id="filter" onChange={filterMovies}>
                            <option value="" disabled>Sort</option>
                            <option value="A_TO_Z">A to Z</option>
                            <option value="Z_TO_A">Z to A</option>
                            <option value="ASCENDING_YEAR">Ascending Year</option>
                            <option value="DESCENDING_YEAR">Descending Year</option>
                        </select>
                    </div>

                    {/* <!-- Dynamic Spawning Point for Movies HERE --> */}
                    <div className="search-results"> 
                        {/* <!-- movies --> */}
                        {loading ? (
                            <FontAwesomeIcon icon="spinner" className='spinner movies__loading--spinner'></FontAwesomeIcon>
                        ) : (
                            movies.map((movie) => (
                                <Movie
                                key={movie.imdbID}
                                movie={movie}
                                />
                            ))
                        )}

                    </div>
                </div>
            </div>
        </section>
    </main>
    </>

  )
}
