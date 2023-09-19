//--------------------------------------**Commentaires**-----------------------------------
// le composant "HomePage" contient un composant enfant 'Banner',qui permet d'afficher une
// image avec claque assombrissant et un texte qui varient selon le responsive.

//l'affichage conditionnel des articles contenant des images de logements à louer et leur titres grâce à la méthode
// map() qui est utilisée pour exécuter des changements sur les éléments de tableau data
// en utilisant une fonction de rappel callback.Le callback sera exécuté sur chaque 
// élément du tableau data si il existe déjà.

// pour rendre les articles cliquable, on applique le composant Link contenant to, 
// en lui ajoutant l'URL, qui nous ramène vers une autre  page "Apartement" pour avoir plus de détail.

// ce composant 'HomePage' est utilisé dans le composant 'Route' qui définit une relation 
// entre une URL et le composant HomePage.

//----------------------------------------**HomePage**----------------------------------------------
// import React, { useState,  useEffect} from 'react';
import Banner from '../components/Banner';
import data from '../datas/logements.json';
import { Link } from 'react-router-dom';

function HomePage() {
      
    return ( 
        <div className='home__Contenair'>
            <Banner/>
                <div className='cards'>
                    {data?data.map((card,index)=>{
                        return (
                            <Link  key={index} to={`/housting/${card.id}`}  className='card' >  
                                <img src={card.cover}  className='card_img' alt="location"/>     
                                <div className='card_layer'> 
                                    <h1 className='card_layer_title'>{card.title}</h1>
                                </div> 
                            </Link>)  
                        })
                    :null}                           
                </div>
        </div>      
    )
}


export default HomePage

