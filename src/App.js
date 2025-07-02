import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import './App.css';
import Header from "./componentes/header/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TattooPortfolio from "./pages/inicio/inicio";
import Footer from "./componentes/footer/footer";
import Principal from "./pages/principal/principal";
import Contact from "./pages/contact/contact";
import ArtistsSection from "./pages/artist/jesse";
import ArtistsSection1 from "./pages/artist/michael";
import Aura from "./pages/artist/aura";
function App() {
    return (_jsx(_Fragment, { children: _jsxs(BrowserRouter, { children: [_jsx(Header, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Principal, {}) }), _jsx(Route, { path: "/about", element: _jsx(TattooPortfolio, {}) }), _jsx(Route, { path: "/michael", element: _jsx(ArtistsSection1, {}) }), _jsx(Route, { path: "/jesse", element: _jsx(ArtistsSection, {}) }), _jsx(Route, { path: "/aura", element: _jsx(Aura, {}) }), _jsx(Route, { path: "/contact", element: _jsx(Contact, {}) })] }), _jsx(Footer, {})] }) }));
}
export default App;
