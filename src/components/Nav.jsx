import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router';

export default function Nav() {
    function openMenu() {
        document.body.classList += " menu--open";
    }

    function closeMenu() {
        document.body.classList.remove("menu--open");
    }
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
            <button className="button__menu" onClick={openMenu}>
                <FontAwesomeIcon icon="bars" size='xl'></FontAwesomeIcon>
            </button>

            <div className="menu">
                <button className="button__menu menu__close" onClick={closeMenu}>
                    <FontAwesomeIcon icon="times"></FontAwesomeIcon>
                </button>

                <ul className="menu__links">
                    <li className="menu__list">
                        <Link to="/" className='menu__link'>Home</Link>
                    </li>
                    <li className="menu__list">
                        <Link to="/movies" className='menu__link'>Find Your Movies</Link>
                    </li>
                    <li className="menu__list">
                        <Link to="/login" className='menu__link'>Login</Link>
                    </li>
                    <li className="menu__list">
                        <Link to="/contact" className='menu__link'>Contact</Link>
                    </li>
                    <li className="menu__list">
                        <Link to="/cart" className='menu__link'>Cart</Link>
                    </li>
                    <li className="menu__list">
                        <Link to="/" className="navbar__link--anchor"> 
                            <FontAwesomeIcon icon="adjust"></FontAwesomeIcon>
                        </Link>
                    </li>
                </ul>
            </div>

        </div>
    </nav>
  )
}
