//-----------------------------------**Commentaires**----------------------------------
// Le composant Banner est une image et un claque assombrissant  et texte qui varient selon 
// le responsive.
// pour le réaliser, il faut importer l'image et réaliser un background-image avec url. 

//---------------------------------------**Banner**-------------------------------------
import React from 'react';
import BannerHome from '../assets/pictures/backgroundBanner.png'
function Banner() {
    return (   
        <div className="banner_container"> 
            <img src={BannerHome}  className='banner_container_img' alt="banner"/>         
            <div className="banner_container_text"> Chez vous, partout et ailleurs</div>
        </div>
    );
}
export default Banner;
