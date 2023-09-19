//------------------------------------**Commentaire**----------------------------------
// Les Collapses sont fermés à l'initialisation de la page par défaul
// le composant Collapse permet de déplier et plier des contenus en faisant disparaitre
// le texte et le style au clic.

// Pour avoir ce résultats on a définit la fonction: 
// 1-->la fonction toggleState permet de gérer la valeur de plie au clic: quand on clique 
// sur le bouton.
// on fait appel à la fonction toggleState qui modifie la valeur setOpen au clic, si 
// le state 'isOpen' est false, elle va prend une valeur true et si le state 'isOpen' 
// est true, toggleState va prendre la valeur false. 

// 2-->la hauteur du collapse déplié' est définit automatiquement lors 
// de sa première ouverture et le style est appliqué au niveau de la div 
// qui contient le texte à basculer (children)

//-------------------------------------**Collapse**------------------------------------  
// import React, { useEffect, useRef } from 'react'//
import { useState }from 'react'
import arrowDown from '../../src/assets/pictures/arrow_down.svg'

function Collapse(props) {

//-------------------------------------**Le toggle**------------------------------------  
  //---> definir le state du isOpen (Attribution de false par défaut)
  const[isOpen,setOpen] =useState(false)
  
  //--->la fonction toggleState modifie la valeur setOpen au clic
  /*quand on clique sur le bouton, on fait appel à  la fonction toggleState, si 'isOpen' est false 
  //il va prend une valeur true et si 'isopen' est true , il va prendre la valeur false */
  const toggleState =()=>{
    setOpen(!isOpen)
  } 
  console.log('isOpen')
  console.log(isOpen) //{true or false}
  
//----------------------------------**hauteur de toggle**-------------------------------------- 

    return ( 
      // affiche le collapse replié par défaut et l'ouvre au clic puis le referme au clic en faisant disparaitre le texte et le style
        <div className='accordion'>
          <button onClick={toggleState} className='accordion__visible'>
            <span>
              {props.aboutTitle}
            </span> 
            <img //animation de chevron si isOpen est true on active sinon rien (si false on aura désactiver  )
              className={isOpen?'active':'desactiver'} //  {/* className={isOpen && 'active'} */}
              src={arrowDown}
              alt="chevron"  
            />
          </button>
          <div
            className= {isOpen? "accordion__toggle animated" : "accordion__toggle"} //si open est true: "le contenus dépliés" donc on lance l'animation, si false le contenus pliés (on passe à m'état initial) 
            style={{height: isOpen ? "auto" : "0px" }}//si open est true on lui attribuer une hauteur auto et si open est false la hauteur est 0 px 
            >
              <div className='accordion__toggle__text' >
                {props.aboutText}
                {props.description}
                {props.equipements}
              </div>
          </div>        
        </div>
  )
}

export default Collapse

