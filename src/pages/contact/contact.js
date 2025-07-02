import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import "./contact.css";
function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        artist: ''
    });
    const [responseMessage, setResponseMessage] = useState(null);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("https://envia-correo-production.up.railway.app/envia", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                setResponseMessage("✅Se envia a tu correo la fecha y hora para tu cita");
                setFormData({ name: '', email: '', artist: '' });
            }
            else {
                const data = await response.json();
                setResponseMessage(`❌ Error del servidor: ${data.message || 'Error desconocido'}`);
            }
        }
        catch {
            setResponseMessage("❌ Error de red al enviar el formulario.");
        }
    };
    return (_jsx("div", { id: "pies", children: _jsxs("form", { onSubmit: handleSubmit, className: "max-w-md mx-auto p-4 shadow-md rounded", children: [_jsx("h2", { className: "text-xl font-semibold mb-4", children: "Agenda Tu Cita" }), _jsxs("label", { className: "block mb-2", children: ["Nombre:", _jsx("input", { type: "text", name: "name", placeholder: "Ingrese su nombre", value: formData.name, onChange: handleChange, required: true, className: "w-full border p-2 mt-1 rounded" })] }), _jsxs("label", { className: "block mb-2", children: ["Email:", _jsx("input", { type: "email", name: "email", placeholder: "Ingrese su email", value: formData.email, onChange: handleChange, required: true, className: "w-full border p-2 mt-1 rounded" })] }), _jsxs("label", { className: "block mb-4", children: ["Seleccione Artista:", _jsxs("select", { name: "artist", value: formData.artist, onChange: handleChange, required: true, className: "w-full border p-2 mt-1 rounded", children: [_jsx("option", { value: "", children: "-- Elegir artista --" }), _jsx("option", { value: "michael", children: "Michael" }), _jsx("option", { value: "jesse", children: "jesse" }), _jsx("option", { value: "aura", children: "Aura" })] })] }), _jsx("button", { type: "submit", className: "bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800", children: "Agendar" }), responseMessage && (_jsx("p", { className: "mt-4 text-sm text-center", children: responseMessage }))] }) }));
}
export default Contact;
