//------------------------------------**Commentaire**----------------------------------
// Les Collapses sont fermés à l'initialisation de la page par défaul
// le composant Collapse permet de déplier et plier des contenus en faisant disparaitre
// le texte et le style au clic.

// Pour avoir ce résultats on a définit deux fonctions: 
// 1-->la fonction toggleState permet de gérer la valeur de plie au clic: quand on clique 
// sur le bouton.
// on fait appel à la fonction toggleState qui modifie la valeur setOpen au clic, si 
// le state 'isOpen' est false, elle va prend une valeur true et si le state 'isOpen' 
// est true, toggleState va prendre la valeur false. 

// 2-->le hook useEffect permet de définir la hauteur du collapse déplié 'setHeightEl', il 
// s'éxécute au montage du composant, il définit la hauteur du collapse  déplié  lors 
// de sa première ouverture et la conserve dans refHeight au niveau de la div 
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
  // //--->Définir le state de la hauteur du collapse
  // const[heightEl,setHeightEl] = useState ()

  // //--->récupération et  et conservation de la valeur de hauteur du collapse déplié
  // const refHeight =  useRef() 
  


  //--->définir une hauteur de collaps à son ouverture
  // const height = refHeight.current.scrollHeight
  //---> la hauteur du collapse  déplié 
  //useEffect s'éxécute au montage du composant, dans ce cas, il définit la hauteur du 
  //collapse  déplié lors de sa première ouverture et la conserve dans refHeight
  /*lorsque le composant renvoie une réponse,et tout est construit, on va lui rajouter 
  //une hauteur setHeightEl, on va lui définir une hauteur de ref au niveau de la div 
  //accordion__toggle qui contient le texte à basculer (children)*/
  // useEffect (() =>{
  //   console.log(refHeight) // un objet 
  //     setHeightEl(`${refHeight.current?.scrollHeight}px`)
  //     // setHeightEl(`${refHeight.current.scrollHeight}px`)
  // },[])
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
            // ref={refHeight}
            className= {isOpen? "accordion__toggle animated" : "accordion__toggle"} //si open est true: "le contenus dépliés" donc on lance l'animation, si false le contenus pliés (on passe à m'état initial) 
            style={{height: isOpen ? "auto" : "0px" }}//si open est true on lui attribuer une hauteur heightEl et si open est false la hauteur est 0 px 
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

//pour le commentaire

// https://www.thecodeforge.io/post/react-get-the-height-or-width-of-an-element