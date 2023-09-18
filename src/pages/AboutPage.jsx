//---------------------------------**Commentaire**-----------------------------------------
// Le composant AboutPage regroupe deux composants enfants, AboutBanner gère l'image de la
// page et le composant About qui contient le composant collapse qui permet d'afficher
// les services, sécurité,respect...
// ce composant est utilisé dans le composant Route qui définit une relation entre une 
// URL et le composant AboutPage. Cela signifie que lorsque l'utilisateur visite une URL 
// sur le navigateur, un Composant correspondant AboutPage doit être rendu sur l'interface.

//-----------------------------------**Commentaires**----------------------------------
// Le composant About est composé d'un composant Collapse et Ci-dessous, on itère sur 
// le tableau de aboutArray.json (contenant de titre/texte) en utilisant la méthode 
// JavaScript map(),et en Assignant une key {i} aux éléments de notre Collapse
// dans aboutArray.map()afin d’apporter aux éléments une identité stable.
// On retourne un composant 'Collapse' qui accepte ce tableau pour chaque entrée du 
// tableau et on l’affiche dans le DOM 
//---------------------------------**AboutPage**-----------------------------------------
import React from 'react'
import AboutBanner from '../components/AboutBanner'
import Collapse from '../components/Collapse'
import ArrayServices from'../datas/ArrayServices.json';

export default function AboutPage() {
  return (
    <div className='aboutPage'>
      <AboutBanner className='aboutPage__aboutBanner'/>
      <div className='aboutPage__contenaireCollapse'>
        {ArrayServices?ArrayServices.map((arryData,i) =>{
          return (
              <Collapse  className ='aboutPage__contenaireCollapse__collappse'
                key={i}
                aboutTitle={arryData.Title} 
                aboutText={arryData.Text}
              />)
          })
        :null}
      </div>
    </div>
  )
}

// className='aboutPage__aboutBanner'
