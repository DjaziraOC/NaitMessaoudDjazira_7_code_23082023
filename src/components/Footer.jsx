//----------------------------------**Commentaire**---------------------------------------
// Le composant Footer permet d'afficher l'image et un texte qui varient
// selon le responseive.Ce Composant sera appliqué sur toutes les pages de site 

//--------------------------------------**Footer**-------------------------------------------
import React from 'react';
import logoFooter from '../../src/assets/pictures/LogoFooter.svg'

const Footer = () => {
    return (
        <div className='footerContenair'>
            <div className='footer__contenair'>
                <img src={logoFooter} alt='logo de footer'   />
                <p className="footer__contenair__text"> © 2023 Kasa. All rights reserved</p>
            </div>
        </div>
    );
};

export default Footer;