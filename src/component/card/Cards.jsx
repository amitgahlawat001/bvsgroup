import React from 'react';
import CardItem from './CardItem';
import './Cards.css'
import roadtransportation from '../../images/grand-shipping.jpg'
import airtransportation from '../../images/air-delivery.jpg'
import seatransportation from '../../images/sea-delivery.jpg'

function Cards() {
  return (
    <div className='cards'>
    
        <ul className='cards_items'>
          <CardItem
            src={roadtransportation}
            text='In the freight forwarding business, you are nowhere unless you have a fleet of reliable vehicles..'
            path='services/road-transportation'
          />
          <CardItem
            src={airtransportation}
            text='At CCL, we have a highly experienced team of air freight specialists who work on the customer’s needs..'
            path='/services/air-delivery'
          />
          <CardItem
            src={seatransportation}
            text='At CCL, we have a highly experienced team of air freight specialists who work on the customer’s needs..'
            path='/services/air-delivery'
          />
        </ul>
      </div>
  
  );
}

export default Cards;