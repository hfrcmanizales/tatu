import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import './header.css';
import { Link } from "react-router-dom";
const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    return (_jsx(_Fragment, { children: _jsxs("header", { className: "header", children: [_jsx("div", { className: "logo", children: "TattooGoth" }), _jsxs("nav", { className: `nav ${menuOpen ? 'open' : ''}`, children: [_jsx("a", { children: _jsx(Link, { to: "/", children: "Home" }) }), _jsxs("div", { className: "dropdown", onMouseEnter: () => setDropdownOpen(true), onMouseLeave: () => setDropdownOpen(false), children: [_jsx("span", { children: "Artist" }), _jsxs("div", { className: `dropdown-menu ${dropdownOpen ? 'show' : ''}`, children: [_jsx("a", { children: _jsx(Link, { to: "/michael", children: "michael" }) }), _jsx("a", { children: _jsx(Link, { to: "/jesse", children: "jesse" }) }), _jsx("a", { children: _jsx(Link, { to: "/aura", children: "aura" }) })] })] }), _jsx("a", { children: _jsx(Link, { to: "/about", children: "About" }) }), _jsx("a", { children: _jsx(Link, { to: "/contact", children: "Contact" }) })] }), _jsx("div", { className: "menu-icon", onClick: () => setMenuOpen(!menuOpen), children: "\u2630" })] }) }));
};
export default Header;
