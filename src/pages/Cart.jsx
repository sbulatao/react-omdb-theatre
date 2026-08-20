import React, { useState, useEffect } from 'react'

export default function Cart({ cart, changeQuantity }) {
    const [total, setTotal] = useState();

    useEffect(() => {
        let price = 0;
        cart.forEach(item => {
            price += (Number(item.BoxOffice.replace(/[$,]/g, "")) * (item.quantity));
        });

        setTotal(price.toLocaleString());
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
                                                <button className="cart__movie--remove">Remove</button>
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
                                        <div className="cart__total">${ (Number(movie.BoxOffice.replace(/[$,]/g, "")) * (movie.quantity)).toLocaleString() }</div>
                                    </div>
                                    )
                                })
                            }
                        </div>

                        <div className="total">
                            <div className="total__item total__sub-total">
                                <span>Subtotal</span>
                                <span>$9.00</span>
                            </div>
                            <div className="total__item total__tax">
                                <span>Tax</span>
                                <span>$1.00</span>
                            </div>
                            <div className="total__item total__price">
                                <span>Total</span>
                                <span>${total}</span>
                            </div>

                            <button className="button button__checkout no-cursor"
                            onClick={() => alert(`Not yet implemented :(`)}>
                                Proceed to Checkout
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    </div>
    
  )
}
