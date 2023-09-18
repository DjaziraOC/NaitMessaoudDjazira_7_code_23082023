//----------------------------------**Commentaire**---------------------------------------
// Le composant Header permet d'afficher l'image de logo qui varie selon le responsive
// on a aussi importé le composant Navigate (enfant) qui permet le lien entre les différentes
// pages. 
// Ce Composant sera appliqué sur toutes les pages de site 

//-------------------------------------**Header**-------------------------------------------

import React from 'react';
import Logo from '../../src/assets/pictures/LogoHeader.svg'
import Navigate from './Navigate';


export default function Header() {
  return (
     <div className = "header__contenaire">
        <figure className='header__contenaire__logo'>
            <img src={Logo}  alt ="logo de l'agence kasa" className='header__contenaire__logo img'/>       
        </figure> 
        <Navigate className='header__contenaire__nav'/>
     </div>
  )
}
