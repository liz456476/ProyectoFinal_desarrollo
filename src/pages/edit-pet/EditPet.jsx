// src/pages/edit-pet/EditPet.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getAllPets, updatePet } from "../../api/api";
import styles from "./EditPet.module.css";

function EditPet() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [pet, setPet] = useState({
    nombre: "",
    descripcion: "",
    edad: "",
    raza: "",
    tamaño: "",
    imagen: ""
  });

  // Cargar datos de la mascota al iniciar
  useEffect(() => {
    const fetchPet = async () => {
      const pets = await getAllPets();
      const petToEdit = pets.find(p => p.id === id);
      if (petToEdit) {
        setPet(petToEdit);
      }
    };
    fetchPet();
  }, [id]);

  const handleChange = (e) => {
    setPet({ ...pet, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updatePet(id, pet); // Actualiza en Firebase
    alert("Mascota actualizada correctamente 🐾");
    navigate("/"); // Redirige al Home
  };

  return (
    <div className={styles.container}>
      <h2>Editar Mascota</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          name="nombre"
          placeholder="Nombre"
          value={pet.nombre}
          onChange={handleChange}
        />
        <input
          name="descripcion"
          placeholder="Descripción"
          value={pet.descripcion}
          onChange={handleChange}
        />
        <input
          name="edad"
          placeholder="Edad"
          value={pet.edad}
          onChange={handleChange}
        />
        <input
          name="raza"
          placeholder="Raza"
          value={pet.raza}
          onChange={handleChange}
        />
        <input
          name="tamaño"
          placeholder="Tamaño"
          value={pet.tamaño}
          onChange={handleChange}
        />
        <input
          name="imagen"
          placeholder="URL de la imagen"
          value={pet.imagen}
          onChange={handleChange}
        />
        <button type="submit">Guardar cambios</button>
      </form>
    </div>
  );
}

export default EditPet;