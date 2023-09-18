//-----------------------------------**Carrousel**------------------------------------
// Le composant Carrousel permet de Switcher entre les images: pour réaliser ce composant 
// 1-->on a crée un style pour que les images peuvent avoir la même dimensionon et,
// 2-->on a définit le slide initial par la valeur 0, à l'aide useState, et un style
// 'StyleBackground' permet d'afficher que la première l'image. 
// 3-->pour switcher entre les slides on a appliqué sur onClick :deux fonctions 'goToPrevious'
//  qui permet de faire passer à l'image d'avant et la fonction 'goToNext' pour passer
//  à l'image d'après.
// 4-->on a aussi une span permet d'afficher le numéro de slide afficher au passage sur le nombre total
// des slides, grâce à la méthode map()

//-------------------------réaliser un slider pour les images---------------------------------
import React, { useState } from 'react';
import leftArrow from '../../src/assets/pictures/arrow_back.svg';
import rightArrow from '../../src/assets/pictures/arrow_forward.svg';
 
export default function Carrousel({slides}) {
//-----------------------------1-créer le slide initial--------------------------------
//créer un stlye pour que les images peuvent avoir la même dimension et on lui inject 
// la valeur 0 donc on voit que la première l'image*/
 
  const [currentIndex,setCurrentIndex] = useState(0) 
  const StyleBackground = {
    backgroundImage:`url(${slides?.[currentIndex]})`,
  };
  
//-----------------------------2-Switching entre les slides-----------------------------
//--->cas goTopPevious
// le premier slide est en position 0, dans ce cas newIndex devrait être -1
// il faut définir le calcule newIndex  
const goToPrevious= ()=>{
  // le premier slide signifié le currentIndex strictement égal à 0 
   const isFirstSlide = currentIndex === 0 
  // On crée la variable newSlide  et on doit vérifier si currentIndex à 0 , si oui  
  // on séléctionne le slide d'avant 'slides.lengh -1'sinon on a currentIndex - 1 
   const newSlide = isFirstSlide? slides.length - 1 : currentIndex - 1
   setCurrentIndex(newSlide)//on fait appel à setCurrentIndex qui prend comme valeur, la valeur de variable newSlide 
}
const goToNext = ()=>{
  // le dernier slide signifié le currentIndex strictement égale slides.lenght - 1 
   const isLastSlide = currentIndex === slides.length -1  
  // On crée la variable newSlide et on doit vérifier si on a le dernier slide , si oui 
  // il revoi 0 il passe la première image,  sinon non on a currentIndex + 1 
   const newSlide = isLastSlide ? 0 : currentIndex +1
   setCurrentIndex(newSlide)
}
//--------------3-'span'Sauter d'une image à une autre------------------------------------
// il faut definir le nombre total  des slides "slides.length"
// la valeur des slides a  parcouru prennent la valeur currentIndex + 1 
  return (
    <div  className ='contenairStyles'>
      <div className ='sliderStyles'> 
        <img  className ='leftArrowStyles' src={leftArrow} onClick={goToPrevious} alt='leftArrow'/> 
        <img  className ='rightArrowStyles'  src={rightArrow} onClick={goToNext}alt='righttArrow'/>

          <div style ={ StyleBackground } className='slideStyles' ></div>     
          {slides?.map((slideIndx)=>(
            <span key={slideIndx}  className='spanStyle'> 
              {currentIndex+1}/{slides.length}
            </span>  
          ))}
      </div> 
    </div>  
)}


//-----------------------------------remarques--------------------------------------------
// const slides = 
  //   [{ url: "http://localhost:3001/image-1.jpg", title: "beach" },
  //   { url: "http://localhost:3001/image-2.jpg", title: "boat" },
  //   { url: "http://localhost:3001/image-3.jpg", title: "forest" },
  //   { url: "http://localhost:3001/image-4.jpg", title: "city" },
  //   { url: "http://localhost:3001/image-5.jpg", title: "italy" },]
  // const StyleBackground = {
  //   backgroundImage: `url(${slides[currentIndex].url})`,
  // };

  // const slides = [
    // "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
    // "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg",
    // "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg",
    // "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg",
    // "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg"
  // ];

//// style={{"--img": `url(${movie?.backdrops[0]})`}}
  // {{"--img": `url(${movie?.backdrops?.[0]})`}} 

//--------------style pour les slides---------------------------------
// const contenairStyles = {
//     // display: 'flex',
//     // flexDirection:'colomn',
//     width :'400px',
//     height:'200px',
//     margin :'0 auto'
//   }
  // créer le style de slider et des slide
  // const sliderStyles ={
  //   height:'100%',
  //   position:'relative',
  //   margin:'40px',

  // };
   // créer le style des slides
  // const slideStyles ={
  //   position:'absolute',
  //   height:'100%',
  //   width:'300px',
  //   borderRadius:"20px",
  //   backgroundSize:"cover",
  //   backgroundPosition:"center",
  // };

//--------------2-style pour ArrowStyles--------------------
    // const leftArrowStyles ={
    //   position:'absolute',
    //   height:'25px',
    //   width:'25px',
    //   top:'50%',
    //   transform:'translate(0,-50%)',
    //   left:'10px',
    //   zIndex:1,
    //   cursor:'pointer',
    //  };
    //  const rightArrowStyles ={
    //   position:'absolute',
    //   height:'25px',
    //   width:'25px',
    //   top:'50%',
    //   transform:'translate(0,-50%)',
    //   right:'30px',
    //   zIndex:1,
    //   cursor:'pointer',
    //  };
//--------------3-1-style pour le span --------------------
// const spanStyle = {
//   position:' absolute',  
//   color: '$tertiary-color',
//   borderColor:'black',
//   border:'2px',
//   bottom:'5%',
//   left:'40%',
// }