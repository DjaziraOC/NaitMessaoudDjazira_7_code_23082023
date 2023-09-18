//-------------------------------**Commentaire**---------------------------------------
// un composant fonctionnel régulier qui utilise React Router <Link to="/"> pour revenir
// à la page d'accueil, ou n'importe où ailleurs dans l'application en cas d'erreur

//---------------------------------**NotFound**-----------------------------------------
import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='contenaireNotFound'>
      <div className='notFound__contenaire'>
          <span className='notFound__contenaire__number'>404</span>
          <p className='notFound__contenaire__text'>Oups! La page que vous demandez n'existe pas.</p>
          <Link to='/' className='notFound__contenaire__link'>Retourner sur la page d’accueil</Link>
      </div>
      </div>
  )
}
