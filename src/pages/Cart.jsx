import React, { useState, useEffect } from 'react';
import EmptyCart from "../assets/undraw_horror-movie_9020.svg"
import { Link } from 'react-router-dom';


export default function Cart({ cart, changeQuantity, removeItem }) {
    const [total, setTotal] = useState();

    useEffect(() => {
        let price = 0;
        cart.forEach(item => {
            price += (Number((item.BoxOffice || "0").replace(/[$,]/g, "")) * (item.quantity));
        });
        
        setTotal(price);
    }, [cart])
    
  return (
    <div id="movie__body">
        <main className="movie__main">
            <div className="movie__container">
                <div className="movie__row">
                    
                    <div className="movie__selected--top">
                        <h2 className="cart__title">Cart</h2>
                    </div>

                    <div className="cart">
                        <div className="cart__header">
                            <span className="cart__movie">Movie</span>
                            <span className="cart__quantity">Quantity</span>
                            <span className="cart__total">Price</span>
                        </div>

                        <div className="cart__body">
                            {
                                cart.map(movie => {
                                    return (
                                    <div className="cart__item" key={movie.imdbID}>
                                        <div className="cart__movie">
                                            <img src={movie.Poster} 
                                            className='cart__movie--img' 
                                            alt="" />
                                            <div className="cart__movie--info">
                                                <span className="cart__movie--title">{movie.Title}</span>
                                                <span className="cart__movie--price">{movie.BoxOffice}</span>
                                                <button className="cart__movie--remove" onClick={() => removeItem(movie)}>Remove</button>
                                            </div>
                                        </div>
                                        <div className="cart__quantity">
                                            <input 
                                            type="number" min={0} max={99} className='cart__input'
                                            value={movie.quantity}
                                            onChange={(e) => changeQuantity(movie, e.target.value)}
                                            />
                                        </div>
                                        {/* replace $ and , to empty so that it can multiply with the quantity */}
                                        <div className="cart__total">${ (Number((movie.BoxOffice || "0").replace(/[$,]/g, "")) * (movie.quantity)).toLocaleString("en-US", {minimumFractionDigits: 2, maximumFractionDigits: 2}) }</div>
                                    </div>
                                    )
                                })
                            }
                        </div>

                        { !cart.length && <div className="cart__empty">
                            <img src={EmptyCart} alt="" className="cart__empty--img" />
                            <h2>You don't have any movies in your cart!</h2>
                            <Link to="/movies">
                                <button className='button'>Browse Movies</button>
                            </Link>
                        </div> }

                        { cart.length && <div className="total">
                            <div className="total__item total__sub-total">
                                <span>Subtotal</span>
                                <span>${(total * 0.9).toLocaleString("en-US", {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
                            </div>
                            <div className="total__item total__tax">
                                <span>Tax</span>
                                <span>${(total * 0.1).toLocaleString("en-US", {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
                            </div>
                            <div className="total__item total__price">
                                <span>Total</span>
                                <span>${(total || "0").toLocaleString("en-US", {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
                            </div>

                            <button className="button button__checkout no-cursor"
                            onClick={() => alert(`Not yet implemented :(`)}>
                                Proceed to Checkout
                            </button>
                        </div> }

                    </div>
                </div>
            </div>
        </main>
    </div>
    
  )
}
