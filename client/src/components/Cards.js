import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards({imagen, descripcion, etiqueta}) {
  return (
      <div className='cards__container'>
        <div className='cards__wrapper'>
            <CardItem
              src= {imagen}
              text= {descripcion}
              label= {etiqueta}
              path="/listado-servicio"
            />
        </div>
      </div>
  );
}

export default Cards;
