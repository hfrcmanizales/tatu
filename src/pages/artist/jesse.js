import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './artist.css';
const ARTISTS_DATA = {
    Jesse: {
        name: 'Jesse',
        photo: 'https://media.istockphoto.com/id/1128777861/es/foto/retrato-de-hermosa-latina-mexican-milenaria-mujer-con-tatuajes-sentado-en-la-capilla-del-coche.webp?a=1&b=1&s=612x612&w=0&k=20&c=wfvWhTBXPXhlKHEmxda5QanVYUSR2kGs1BJKKVy9IYg=',
        gallery: [
            'https://images.unsplash.com/photo-1586243287039-23f4c8e2e7ab?w=600',
            'https://images.unsplash.com/photo-1619022060016-b40327325cf6?w=600',
            'https://images.unsplash.com/photo-1557030266-a350865a82fb?w=600',
            'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRhdHVhamVzfGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1604374376934-2df6fad6519b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRhdHVhamVzfGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1562962230-16e4623d36e6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRhdHVhamVzfGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1542727365-19732a80dcfd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dGF0dWFqZXN8ZW58MHx8MHx8fDA%3D',
            'https://plus.unsplash.com/premium_photo-1707086194263-8ae88d647df7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGF0dWFqZXN8ZW58MHx8MHx8fDA%3D'
        ],
    },
    // Agrega más artistas aquí
};
const ArtistsSection = () => {
    return (_jsxs("section", { className: "artist-page", children: [_jsxs("div", { className: "artist-info", children: [_jsx("img", { src: ARTISTS_DATA.Jesse.photo, alt: ARTISTS_DATA.Jesse.name, className: "artist-photo" }), _jsx("h2", { className: "artist-name", children: ARTISTS_DATA.Jesse.name })] }), _jsx("div", { className: "artist-gallery", children: ARTISTS_DATA.Jesse.gallery.map((img, idx) => (_jsx("img", { src: img, alt: `Tattoo ${idx + 1}`, className: "tattoo-img" }, idx))) })] }));
};
export default ArtistsSection;
