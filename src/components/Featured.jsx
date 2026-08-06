import React from 'react'
// import Movie from './ui/Movie'

export default function Featured() {

    // filter movie data?
    // const featuredMovies = getMovieData.filter(movie => movie.imdbRating === 10);

  return (
    <section id="features">
        <div className="container">
            <div className="row">

                <h2 className="title__subtitle-1">
                    Featured <span className="highlights">Movies</span>
                </h2>

                <div className="movies">
                    <h2>Not Available.</h2>
                    {/* {featuredMovies.length === 0 && (<h2>Not Available.</h2>)} */}
                    
                    {/* {featuredMovies.map(movie => (
                    <Movie
                        key={movie.id}
                        movie={movie}/>
                    ))} */}
                    {/* hmmmm need to find another way
                    <Movie />                    
                    <Movie />                    
                    <Movie />                    
                    <Movie />                    
                    <Movie />                    
                    <Movie />                     
                    */}
                </div>

            </div>
        </div>
    </section>
  )
}
