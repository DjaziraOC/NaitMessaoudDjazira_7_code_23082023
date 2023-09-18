//-----------------------------------**Commentaires**------------------------------------
// Le composant AboutBanner est une image et un claque assombrissant qui varient selon 
// le responsive.
// pour le réaliser, il faut importer l'image et réaliser un background avec url. 
// SCSS

//-----------------------------------**AboutBanner**------------------------------------
import AboutBackground from '../assets/pictures/mobileBackgroundAbout.svg'
function AboutBanner() {
  return (
      <div className = "aboutBanner">
        <img src={AboutBackground} className='aboutBanner_img' alt="Aboutbanner"/>
      </div>
  )          
}

export default AboutBanner
