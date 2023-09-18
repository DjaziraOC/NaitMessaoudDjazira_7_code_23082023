//-----------------------------------**Commentaires**----------------------------------
// le composant Cards sera utilisé pour réaliser la page d'accueil qui sera réaliser grace au 
// composant parent HomePage. Ce composant il va contenir une image et titre qui varient 
// selon le responsive.//à supprimer

//--------------------------------------**Cards**----------------------------------------
import React from 'react';
function Cards(props) {
     
    return ( 
        <section>
            <div className='cards'>
                <div className='card'> 
                    <img src={props.cover}  className='card_img' alt="location"/>     
                    <div className='card_layer'> 
                        <div className='card_layer_title'>
                            <h1>{props.title}</h1>
                        </div>
                    </div> 
                </div>                 
            </div>
        </section>          
    )
}

export default Cards


