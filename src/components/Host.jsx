//----------------------------------**Commentaire**---------------------------------------
// Le composant Host permet l'affichage conditionnel de nom et l'image de l'host passé en props
// de chaque logement et qui varient selon le responsive.

//--------------------------------------**Host**------------------------------------------------
import React from 'react';
function Host(props) {
  return (
    <div className='host__container'>
        <div className='host__container__name'>
           <p>{props.hostname}</p>
        </div>
        <figure className='host__container__img'>
            <img src={props.hostpicture}  alt={props.id}/>
        </figure>   
    </div>
  )
}

export default Host




