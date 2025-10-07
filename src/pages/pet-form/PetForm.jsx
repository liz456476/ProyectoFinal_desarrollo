import React, { useState } from "react";
import { addPet } from "../../api/api";
import styles from "./PetForm.module.css";

function PetForm() {
  const [form, setForm] = useState({
    nombre: "",
    descripcion: "",
    edad: "",
    raza: "",
    tamaño: "",
    imagen: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addPet(form);
    alert("Mascota agregada correctamente 🐾");
    setForm({ nombre: "", descripcion: "", edad: "", raza: "", tamaño: "", imagen: "" });
  };

  return (
    <div className={styles.container}>
      <h2>Agregar nueva mascota</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input name="nombre" placeholder="Nombre" value={form.nombre} onChange={handleChange} />
        <input name="descripcion" placeholder="Descripción" value={form.descripcion} onChange={handleChange} />
        <input name="edad" placeholder="Edad" value={form.edad} onChange={handleChange} />
        <input name="raza" placeholder="Raza" value={form.raza} onChange={handleChange} />
        <input name="tamaño" placeholder="Tamaño" value={form.tamaño} onChange={handleChange} />
        <input name="imagen" placeholder="URL de Imagen" value={form.imagen} onChange={handleChange} />
        <button type="submit">Agregar Mascota</button>
      </form>
    </div>
  );
}

export default PetForm;