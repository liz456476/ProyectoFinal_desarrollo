// src/pages/contact/Contact.jsx
import React, { useState } from "react";
import styles from "./Contact.module.css";

function Contact() {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mensaje enviado ✅");
    setForm({ nombre: "", email: "", mensaje: "" });
  };

  return (
    <div className={styles.container}>
      <h2>Contacto</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input name="nombre" placeholder="Nombre" value={form.nombre} onChange={handleChange} />
        <input name="email" placeholder="Email" type="email" value={form.email} onChange={handleChange} />
        <textarea name="mensaje" placeholder="Mensaje" value={form.mensaje} onChange={handleChange}></textarea>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contact;