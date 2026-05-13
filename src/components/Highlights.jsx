import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Highlight from './ui/Highlight'

// ADDED SECTION

export default function Highlights() {
  return (
    <section id='highlights'>
        <div className="container">
            <div className="row">

                <h2 className='title__subtitle-1'>
                    Why choose <span className='highlights'> OMDb Theater</span>
                </h2>

                <div className="highlight__wrapper">
                    
                    <Highlight 
                        icon={<FontAwesomeIcon icon="bolt"></FontAwesomeIcon>} 
                        title="Easy and Quick"
                        para="Get access to the movies you have selected online." >
                    </Highlight>

                    <Highlight 
                        icon={<FontAwesomeIcon icon="film"></FontAwesomeIcon>} 
                        title="10,000+ Movies"
                        para="OMDb Theater has movies in all your favorite categories." >
                    </Highlight>

                    <Highlight 
                        icon={<FontAwesomeIcon icon="tags"></FontAwesomeIcon>} 
                        title="Not So Affordable..."
                        para="Get your hands on popular movies... hopefully." >
                    </Highlight>

                </div>

            </div>
        </div>
    </section>
      
  )
}
