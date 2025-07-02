import React, { useState } from "react";
import "./contact.css";

interface FormData {
  name: string;
  email: string;
  artist: string;
}

function Contact(){
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    artist: ''
  });

  const [responseMessage, setResponseMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
      } else {
        const data = await response.json();
        setResponseMessage(`❌ Error del servidor: ${data.message || 'Error desconocido'}`);
      }
    } catch {
      setResponseMessage("❌ Error de red al enviar el formulario.");
    }
  };

  return (
    <div id="pies">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 shadow-md rounded">
        <h2 className="text-xl font-semibold mb-4">Agenda Tu Cita</h2>

        <label className="block mb-2">
          Nombre:
          <input
            type="text"
            name="name"
            placeholder="Ingrese su nombre"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border p-2 mt-1 rounded"
          />
        </label>

        <label className="block mb-2">
          Email:
          <input
            type="email"
            name="email"
            placeholder="Ingrese su email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border p-2 mt-1 rounded"
          />
        </label>

        <label className="block mb-4">
          Seleccione Artista:
          <select
            name="artist"
            value={formData.artist}
            onChange={handleChange}
            required
            className="w-full border p-2 mt-1 rounded"
          >
            <option value="">-- Elegir artista --</option>
            <option value="michael">Michael</option>
            <option value="jesse">jesse</option>
            <option value="aura">Aura</option>
          </select>
        </label>

        <button type="submit" className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800">
          Agendar
        </button>

        {responseMessage && (
          <p className="mt-4 text-sm text-center">{responseMessage}</p>
        )}
      </form>
    </div>
  );
}

export default Contact;
