import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './artist.css';
const ARTISTS_DATA = {
    aura: {
        name: 'aura',
        photo: 'https://images.unsplash.com/photo-1677286061466-7cc3531e5027?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGF0dWFqZXMlMjBtdWplc3xlbnwwfHwwfHx8MA%3D%3D',
        gallery: [
            'https://images.unsplash.com/photo-1713730633807-6b24c383ad76?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRhdHVhamVzJTIwbXVqZXN8ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1560376306-ba13cce1b3e7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRhdHVhamVzJTIwbXVqZXN8ZW58MHx8MHx8fDA%3D',
            'https://media.istockphoto.com/id/947349368/es/foto/dibujo-de-un-mehendi-en-la-mano.webp?a=1&b=1&s=612x612&w=0&k=20&c=-HuDRgbdkQFXfTkWysvmIvfl_vUutgD-vRN8X7az5ws=',
            'https://media.istockphoto.com/id/955189302/es/foto/mujer-joven-que-lucha-contra-su-depresi%C3%B3n.webp?a=1&b=1&s=612x612&w=0&k=20&c=evAM5DjcWcfIZEVo5dQjxFw2lAvC2OcTSXMPTekEHAE=',
            'https://images.unsplash.com/photo-1742054290252-017d69c7b0aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGF0dWFqZXMlMjBtdWplcyUyMGdvdGljYXN8ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1702651419410-2692e1ed70e6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGF0dWFqZXMlMjBtdWplcyUyMGdvdGljYXN8ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1662327983426-4df9bc47e5ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRhdHVhamVzJTIwbXVqZXMlMjBnb3RpY2FzfGVufDB8fDB8fHww',
            'https://plus.unsplash.com/premium_photo-1745179476764-d0d8f12a3b81?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRhdHVhamVzJTIwbXVqZXMlMjBnb3RpY2FzfGVufDB8fDB8fHww',
        ],
    },
    // Agrega más artistas aquí
};
const Aura = () => {
    return (_jsxs("section", { className: "artist-page", children: [_jsxs("div", { className: "artist-info", children: [_jsx("img", { src: ARTISTS_DATA.aura.photo, alt: ARTISTS_DATA.aura.name, className: "artist-photo" }), _jsx("h2", { className: "artist-name", children: ARTISTS_DATA.aura.name })] }), _jsx("div", { className: "artist-gallery", children: ARTISTS_DATA.aura.gallery.map((img, idx) => (_jsx("img", { src: img, alt: `Tattoo ${idx + 1}`, className: "tattoo-img" }, idx))) })] }));
};
export default Aura;
