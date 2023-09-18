//ici on trouve:
//repértoire App (tous les component)
//index.scss (le style scss de tous les composants)
//par la suite l'App seraafficher à l'aide de id root
//quand on a dans le rép public /fichier index.html (la racine de projet)*/

//---------------------------**index.js**-----------------------------
import React from 'react';
import ReactDOM from 'react-dom/client';//react-dom c'est un node-module de nodejs
import './styles/index.scss';//on importe de fichier index.scss
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/> {/*< /> self closing */}
  </React.StrictMode>,
);

// ---------------**Commentaire**----------------------
//ici on trouve:
//repértoire App (tous les component)
//index.scss (le style scss de tous les composants)
//par la suite l'App seraafficher à l'aide de id root
//quand on a dans le rép public /fichier index.html (la racine de projet)*/
