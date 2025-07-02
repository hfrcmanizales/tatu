import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState, useRef } from 'react';
import './ourword.css';
const tattooImages = [
    'https://images.unsplash.com/photo-1586243287039-23f4c8e2e7ab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8',
    'https://images.unsplash.com/photo-1665873493539-1e499b3c3333?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4MXx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1634294613818-7858f8557147?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4Mnx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1619022060016-b40327325cf6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2NXx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1672426780806-96f46080b7ca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2Mnx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1647126004398-75bcacfa27ec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1Nnx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1562330764-65a98e874eb4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1NHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1721251326703-a3224a767828?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1MXx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0NHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1588417490421-63d4e4175f95?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzOXx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1598816639574-47ef99da24fd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzMXx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1557030266-a350865a82fb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExNnx8fGVufDB8fHx8fA%3D%3D'
];
const GallerySection = () => {
    const gridRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // deja de observar una vez visible
                }
            });
        }, { threshold: 0.2 });
        if (gridRef.current) {
            observer.observe(gridRef.current);
        }
        return () => observer.disconnect();
    }, []);
    return (_jsxs("section", { className: "gallery-section", children: [_jsx("h1", { className: "gallery-title", children: "Nuestro trabajo" }), _jsx("div", { className: `gallery-grid ${isVisible ? 'show-grid' : 'hide-grid'}`, ref: gridRef, children: tattooImages.map((src, index) => (_jsx("div", { className: "gallery-item", children: _jsx("img", { src: src, alt: `Tattoo ${index + 1}` }) }, index))) })] }));
};
export default GallerySection;
