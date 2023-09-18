//----------------------------------**Commentaire**--------------------------------------------
// Le composant Rat permet de gérer un système de notation en étoile grâce à la méthode
// map() qui est utilisée pour exécuter des changements sur les éléments de tableau stars
// en utilisant une fonction de rappel callback.Le callback sera exécuté sur chaque 
// élément du tableau en prennant en compte  et en vérifiant que scores des étoiles, pleine ou vide
// 'rating'soit inférieur ou égal le nombre éléveé de tableau.
// affichage conditionnel des scores des étoiles, pleine ou vide selon le score (rating) passé en props

//--------------------------------------**Rat**------------------------------------------------
//----------------------------importation des images en svg------------------------------------
import React from 'react'
import emptyStar from "../../src/assets/pictures/emptyStar.svg";
import fullStar from "../../src/assets/pictures/fullStar.svg";

export default function Rat({rating}) {
const stars = [1, 2, 3, 4, 5];

    return ( 
          <div  className="contenair__rating">    
            {stars.map((star)=>
            // si on donne le score de rat(rating) ,on aura 2 fullStar ({star.toSting()})à verifier par la suite
                rating< star?
                (  
                  <img  key ={star}  src={emptyStar}  alt=' emptyStar' className='contenair__rating__emptyStar'/>
                ): (
                  <img key ={star} src={fullStar} alt='fullStar'className='contenair__rating__fullStar'/>
                )
            )}   
                 
           </div>  
      )
}
