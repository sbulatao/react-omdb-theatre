import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router'

export default function Footer() {
  return (
    <footer>
        <div className="container">
            <div className="row">
                <Link to='/'>
                    <div className="footer__logo">
                        <FontAwesomeIcon icon="film" size='3x'></FontAwesomeIcon>
                        <div className="navbar__logo--title">OMDb Theater</div>
                    </div>
                </Link>
                <div className="footer__list">
                    <Link to="/" className='footer__link'>Home</Link>
                    <span className='footer__link no-cursor'>About</span>
                    <Link to="/movies" className='footer__link'>Find Your Movies</Link>
                    <Link to="/login" className='footer__link'>Login</Link>
                    <Link to="/contact" className='footer__link'>Contact</Link>
                    <Link to="/cart "className='footer__link'>Cart</Link>
                </div>
                <div className="footer__copyright">
                    Copyright &copy; 2026 OMDb Theater
                </div>
            </div>
        </div>
    </footer>
  )
}
