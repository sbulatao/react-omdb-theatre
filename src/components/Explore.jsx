import React from 'react'
import { Link } from 'react-router'

export default function Explore() {
  return (
    <section id='explore'>
        <div className="container">
            <div className="row">
                <h2 className="title__subtitle-1">
                    Explore more <span className='highlights'>Movies</span>
                </h2>
                <Link to='/movies'>
                    <button className="button">Explore Movies</button>
                </Link>
            </div>
        </div>
    </section>
  )
}
