import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
      <h1>Know thy world</h1>
      <div className='cards__container'>
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem 
            src="https://images.pexels.com/photos/631296/pexels-photo-631296.jpeg"
            text="Norway"
            label="Destination"
            path='/services'
            />
            <CardItem 
            src="https://images.pexels.com/photos/17978607/pexels-photo-17978607/free-photo-of-costumers-during-traditional-peruvian-celebrations.jpeg"
            text="Peru"
            label="Destination"
            path='/services'
            />
            <CardItem 
            src="https://images.pexels.com/photos/398154/pexels-photo-398154.jpeg"
            text="Malaysia"
            label="Destination"
            path='/services'
            />
            <CardItem 
            src="https://images.pexels.com/photos/2870587/pexels-photo-2870587.jpeg"
            text="China"
            label="Destination"
            path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards