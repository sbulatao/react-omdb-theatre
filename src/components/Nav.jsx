import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router';

export default function Nav() {
  return (
    <nav>
    <div className="navbar">
        {/* NAVBAR LOGO */}
        <div className="navbar__logo">
            <FontAwesomeIcon icon="film" size='3x'></FontAwesomeIcon>
            <div className="navbar__logo--title">OMDb Theater</div>
        </div>

            {/* LINKS */}
            <ul className="navbar__links">
                <li> {/* HOME */}
                    <Link to="/" className="navbar__link link__hover-effect">Home</Link>
                </li>

                <li> {/* MOVIES */}
                    <Link to="/movies" className="navbar__link link__hover-effect">Find Your Movies</Link>
                </li>


                <li> {/* ADDING: LOGIN -- IN PROGRESS */}
                    <Link to="/login" className='navbar__link'>Login</Link>
                </li>

                <li> {/* CONTACT */}
                    <Link to="/contact" className="button navbar__link--primary link__hover-effect" >Contact</Link>
                </li>
                
                <li> {/* ADDING: CART -- IN PROGRESS */}
                    <Link to="/cart" className='navbar__link'>
                        <FontAwesomeIcon icon="shopping-cart"></FontAwesomeIcon>
                    </Link>
                </li>

                {/* LIGHT/DARK CONTRAST */}
                <li className="navbar__link click link__hover-effect">
                    <Link to="/" className="navbar__link--anchor"> 
                        <FontAwesomeIcon icon="adjust"></FontAwesomeIcon>
                    </Link>
                </li>
            </ul>

            {/* <!-- menu button --> */}
            <button className="button__menu">
                <FontAwesomeIcon icon="bars" size='xl'></FontAwesomeIcon>
            </button>

        </div>
    </nav>
  )
}
