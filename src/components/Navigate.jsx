//-----------------------------------**Commentaire**---------------------------------------
// Le composant Navigate permet de faire le lien entre la page d'accueil et la page About 
// Il contient le composant NavLink qui est affiché comme un tag <a> avec une valeur
// d'attribut href qui est affectée à la prop to.
// Ce Composant est l'un des composants enfant de composant Header.

//-------------------------------------**Header**-------------------------------------------
import React from 'react';
import {NavLink} from 'react-router-dom'

export default function Navigate() {
    return (
      <nav className='menu__navLink'>
          <NavLink to='/' className ="menu__navLink__home">
            Accueil                       
          </NavLink>
          <NavLink to='/about' className ="menu__navLink__about">
            A propos
          </NavLink>
      </nav> 
    )
}

