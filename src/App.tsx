import './App.css'
import Header from "./componentes/header/header";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import TattooPortfolio from "./pages/inicio/inicio"
import Footer from "./componentes/footer/footer"
import Principal from "./pages/principal/principal"
import Contact from "./pages/contact/contact"
import ArtistsSection from "./pages/artist/jesse"
import ArtistsSection1 from "./pages/artist/michael"
import Aura from "./pages/artist/aura"

function App() {

  return (
    <>
    
     <BrowserRouter>
       <Header/>
         <Routes>
            <Route path="/" element={<Principal/>}/>
            <Route path="/about" element={<TattooPortfolio/>}/>

            <Route path="/michael" element={<ArtistsSection1/>}/>
            <Route path="/jesse" element={<ArtistsSection/>}/>
            <Route path="/aura" element={<Aura/>}/>

            <Route path="/contact" element={<Contact/>}/>
         </Routes>
        <Footer/>
     </BrowserRouter>
    
    </>
  )
}

export default App
