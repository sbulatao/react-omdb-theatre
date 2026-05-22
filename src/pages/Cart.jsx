import React from 'react'

export default function Cart() {
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
                            <div className="cart__item">
                                <div className="cart__movie">
                                    <img src="https://m.media-amazon.com/images/M/MV5BNGNmNjI0ZmMtMzI5MC00ZjUyLWFlZDEtYjUyMGZlN2E3N2E2XkEyXkFqcGc@._V1_SX300.jpg" 
                                    className='cart__movie--img' 
                                    alt="" />
                                    <div className="cart__movie--info">
                                        <span className="cart__movie--title">The Mask</span>
                                        <span className="cart__movie--price">$10.000</span>
                                        <button className="cart__movie--remove">Remove</button>
                                    </div>
                                </div>
                                <div className="cart__quantity">
                                    <input type="number" min={0} max={99} className='cart__input'/>
                                </div>
                                <div className="cart__total">$10.00</div>
                            </div>
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
                                <span>$10.00</span>
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
