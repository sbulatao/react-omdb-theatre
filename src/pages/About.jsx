import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function About() {
  return (
    <div className="container">
        <div className="row">
            <div className="modal__about">
                <h3 className="modal__title modal__title--about">About OMBd Theater</h3>
                <h4 className="modal__sub-title modal__sub-title--about">
                Open Movie Source</h4>
                <p className="modal__para">
                We are <b className="highlights">OMBd Theater</b>, 
                and we are here to deliver experience to your home.
                </p>
                <p className="modal_para">
                We are a free and open source movie theater at the palm of your hands.
                With just a click away, you can start watching.
                </p>

                {/* <!-- GENRE STACK --> */}
                <div className="modal__languages">
                <figure className="modal__language">
                    <FontAwesomeIcon icon='masks-theater' size='xl' className='modal__language--img'></FontAwesomeIcon>
                    <span className="language__name">Drama</span>
                </figure>
                <figure className="modal__language">
                    <FontAwesomeIcon icon='photo-film' size='xl' className='modal__language--img'></FontAwesomeIcon>
                    <span className="language__name">Action</span>
                </figure>
                <figure className="modal__language">
                    <FontAwesomeIcon icon='heart' size='xl' className='modal__language--img'></FontAwesomeIcon>
                    <span className="language__name">Romance</span>
                </figure>
                <figure className="modal__language">
                    <FontAwesomeIcon icon='face-laught-beam' size='xl' className='modal__language--img'></FontAwesomeIcon>
                    <span className="language__name">Comedy</span>
                </figure>

                </div>
            </div>
        </div>
    </div>
  )
}
