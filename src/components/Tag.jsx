//----------------------------------**Commentaire**---------------------------------------
// Le composant Tag permet d'afficher les tags de chaque logement et qui varient
// selon le responseive.Ce Composant sera utilisé commen composant enfant pour réaliser
// la page Apartment.

//--------------------------------------**Tag**------------------------------------------------
import React from 'react'

export default function Tag(props) {
  return (
    <button className="tag__container">
			<p className="tag__container__tagText">{props.tag}</p>
		</button>
   
  )
}
