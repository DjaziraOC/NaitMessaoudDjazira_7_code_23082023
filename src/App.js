//---------------------------------**Commentaires**---------------------------------------
// Le routing est le mécanisme qui permet de naviguer d'une page à une autre sur un site web.
// s'effectuer dans le fichier App.js.

// pour pouvoir ajouter une route vers les composants, il faut le composant BrowserRouter
// Il suffira d'envelopper les composants de pages à l'intérieur de HashRouter. 
// Cela permet à tous les composants de la page de bénéficier de la logique de routage.

// Le composant Router dispose d'une prop path  qui accepte le chemin de la page sélectionnée (url)
// et le composant de la page doit être enveloppé par le routeur.

//---------------------------**Importation des Composants**-----------------------------
import { Routes,Route, BrowserRouter} from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Housting from "./pages/Housting";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";
import Footer from "./components/Footer";
//-----------------------------------**App/Routes**------------------------------------
function App() {
  return (
    <div id="App">
      <BrowserRouter>
        <Header/>
          <main>
            <Routes>
                {/* <Route path='/' element={<Navigate replace to='/home' />} /> */}
                <Route path='/' element={<HomePage/>}/>
                <Route path='/housting/:id' element={<Housting/>}/> 
                <Route path='/about' element= {<AboutPage/>}/>
                <Route path='*'element={<ErrorPage/>}/> 
            </Routes>
          </main>
        <Footer/> 
        </BrowserRouter>
    </div>
  );
}

export default App;

//-------commentaire
// Définir le pathà * agira comme un catch-all pour toutes les URL non définies.
// C'est parfait pour une page d'erreur 404.

// le traitement du routing s'effectuera dans le fichier App.js.
// Pour complèter effectuons une modification graphique dans les
// fichiers App.css et Index.css
// Le composant <Route> définit une relation (mapping) entre une 
// URL et un Component. Cela signifie que lorsque l'utilisateur visite une URL sur le navigateur, 
// un Component correspondant doit être rendu sur l'interface.