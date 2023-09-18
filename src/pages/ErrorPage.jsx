//---------------------------------**Commentaire**-----------------------------------------
// le composant ErrorPage est composé d'un composant enfant, NotFound qui permet 
// d'afficher le message d'rreur et le Link pour revenir à la page d'accueil, ou n'importe 
// où ailleurs dans l'application en cas d'erreur.
// ce composant est utilisé dans le composant Route qui définit une relation entre une 
// URL et le composant ErrorPage.

//---------------------------------**ErrorPage**-----------------------------------------
import React from 'react'
import NotFound from '../components/NotFound'

export default function ErrorPage() {
  return (
    <div>
      <NotFound/>
    </div>
  )
}
