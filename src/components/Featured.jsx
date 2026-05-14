import React from 'react'
import Movie from './ui/Movie'


export default function Featured() {
  return (
    <section id="features">
        <div className="container">
            <div className="row">

                <h2 className="title__subtitle-1">
                    Featured <span className="highlights">Movies</span>
                </h2>

                <div className="movies">
                    <Movie></Movie>
                    <Movie></Movie>
                    <Movie></Movie>
                    <Movie></Movie>
                    <Movie></Movie>
                    <Movie></Movie>
                </div>

            </div>
        </div>
    </section>
  )
}
