import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Contact() {
  return (
    <div className='container'>
        <div className="row">
            {/* <FontAwesomeIcon icon='times' className='modal__exit click'></FontAwesomeIcon> */}
            {/* onclick="toggleModal() */}
            <h3 className="modal__title modal__title--contact">
            See any problems and would like us to fix it?
            Contact us.
            </h3>

            <h3 className="modal__sub-title modal__sub-title--contact">
            We would gladly receive feedback.
            </h3>

            <form id="contact__form">
            {/* onSubmit="contact(event) */}
                <div className="form__item">
                    <label className="form__item--label">Name</label>
                    <input className="input" name="user_name" type="text" required></input>
                </div>
                <div className="form__item">
                    <label className="form__item--label">Email</label>
                    <input className="input" name="user_email" type="email" required></input>
                </div>
                <div className="form__item">
                    <label className="form__item--label">Message</label>
                    <textarea className="input" name="message" type="text" required></textarea>
                </div>
                <button id="contact__submit" className="form__submit">
                    Send it
                </button>
            </form>

            <div className="modal__overlay modal__overlay--loading">
            <FontAwesomeIcon icon='spinner'></FontAwesomeIcon>
            </div>
            <div className="modal__overlay modal__overlay--success">
            Thanks for the message! Looking forward to speaking to you soon.
            </div>
        </div>
     </div>

  )
}
