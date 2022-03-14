import React from 'react'
import img6 from './img/img6.jpg'
import img15 from './img/img15.jpg'
import img12 from './img/img12.jpg'
import {Card} from 'react-bootstrap'
// import Mobile from './Contacts/Mobile'
import {Link} from 'react-router-dom'

function NosRealisations() {
  return (
    
    
        <div class="cards-list"  >
          <div style={{fontFamily:' Satisfy', fontSize:'50px', }}>Nos Realisations: </div>
         

           <div class="card 1">
           <div class="card_image"><img src={img15} /> </div>
            <Card.Title>Decoration & aménagement</Card.Title>

            <Link  to={'/Décorattion & aménagement pour particulier'} > DETAILS </Link>
           {/* to={"/Offers"} */}
          
          </div>



          <div class="card 2">
         <div class="card_image"><img src={img6} /></div>
          <Card.Title>Agencement locaux professionnels</Card.Title>
          <Link  to={'/Agencement & de locaux professionnels'} > DETAILS </Link>
          </div>

           <div class="card 3">
           <div class="card_image"><img src={img12} /> </div>
           <Card.Title>Visite conseil avant achat</Card.Title> 
           <Link  to={'/Décorattion & aménagement pour particulier'} > DETAILS </Link>
           </div>

    </div>
  )
}

export default NosRealisations