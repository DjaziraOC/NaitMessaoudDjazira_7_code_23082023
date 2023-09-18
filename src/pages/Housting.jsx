
//-----------------------------------**Commentaires**----------------------------------
// le composant "Apartment" permet d'afficher plus d'information et de détails sur le logement à louer 

// elle renvoi un tableau data contenant plusieur objet.
// avec la méthode filter on séléctionne à partir de tableau data un seul objet à l'aide de son 
// id récupéré grâce useParams()

// avac la méthode map() on peut facilement d'itérer sur des données et de retourner
// un tableau d'éléments.
// en cas

// Ce composant contient d'autre composants enfants et chaque composant  gère une partie de composant
// parent, on a :
// Carrousel:permet de Switcher entre les images
// Tag:permet d'afficher les tags de chaque logement
// Host:permet d'afficher le nom et l'image de l'host  de chaque logement 
// Rat:permet de gérer un système de notation en étoile
// Collapse:permet de plier et déplier des contenus.Son option permet d’indiquer 
// les éventuels contenus dépliés par défaut.

//------------------------------------**Apartment**------------------------------------------
// import React, { useEffect, useState } from 'react';
// import axios  from 'axios';
import {useParams } from 'react-router-dom';//useNavigate,
import {useNavigate} from 'react-router-dom';
import Carrousel from '../components/Carrousel'
import Tag from '../components/Tag';
import Host from '../components/Host';
import Rat from '../components/Rat';
import Collapse from '../components/Collapse';
import DataFichLogement from "../datas/logements.json"

function HoustingPage() {
//------------------------------------**useParams**-----------------------------------------
// useParams utiliser pour récupérer les paramètres de route à partir du composant 
// rendu par la route correspondante. 
    const {id} = useParams()
    console.log('params')
    console.log(id)
//------------------------------------**useNavigate**-----------------------------------------
    const {navigate} = useNavigate()
        
//---> avec la méthode find on séléctionne un objet à l'aide de son id 
    const product=DataFichLogement.find(item=> item.id===id)
    console.log('product')
    console.log(product)
                 
    if(product=== undefined) {
        navigate("/404", { state:{ message: "Api is not working" }}); 
    }

//---Title-------------------------------------------------------------------------------------
    const title =product?.title
    console.log('title')
    console.log(title)

//---Location-------------------------------------------------------------------------------------
    const location =product?.location
    console.log('location')
    console.log(location)

//---Carrousel-------------------------------------------------------------------------------------
    const slideId = product?.pictures
    console.log('slide')
    console.log(slideId)

//---Tag------------------------------------------------------------------------------------- 
    const tags = product.tags
    console.log('tags')
    console.log(tags)

//---Host-------------------------------------------------------------------------------------
    const nameId = product.host?.name
    console.log('hostname')
    console.log(nameId)

    const pictureId = product.host?.picture
    console.log('picture')
    console.log(pictureId)

//---Rat-------------------------------------------------------------------------------------
    const rating = product?.rating;
    console.log('rating')
    console.log(rating)

//---Collapse-------------------------------------------------------------------------------------
    const descriptionApart = product?.description
    console.log('descriptionApart')
    console.log(descriptionApart)

    const equipement=
        product.equipments?.map((equip,indexEquip)=>
            <div key={indexEquip}>{equip}</div>
        )
    console.log('equipement')
    console.log(equipement )
  
  return (
    product&&(
        <div className='housting__contenaire'>
            <Carrousel  className ='carrousel__contenaire'
                slides = {slideId}
            />  
            <div className='contenaire'>
                <div className='contenaire__information'>
                    <h1 className='contenaire__information__title'>{product?.title} </h1>
                    <p className='contenaire__information__localisation'>{product?.location} </p>
                    <div className='contenaire__information__tag'>
                        {product.tags?.map((tag)=>
                            <Tag 
                            key={tag} 
                            tag={tag} 
                            />   
                        )}  
                    </div>
                </div>
                <div className='contenaire__visitor'>
                    <Host className='contenaire__visitor__hosting'
                        hostname={product.host?.name}
                        hostpicture={product.host?.picture}
                    />
                    <Rat className='contenaire__visitor__rating'
                        rating={product?.rating} 
                    />
                </div>
            </div>
            <div className='collapse__contenaire'>
                <div className='collapse__contenaire__description'> 
                    <Collapse className= 'collapse__contenaire__description'
                        aboutTitle ={'Description'} 
                        description= {product?.description} 
                    />
                </div> 
                <div className= 'collapse__contenaire__equipement'>  
                    <Collapse className='collapse__contenaire__equipement'  
                        aboutTitle ={'Équipements'} 
                        equipements ={equipement}       
                    />
                </div>    
                
            </div>
        </div>
    )
)        
}

export default HoustingPage 


