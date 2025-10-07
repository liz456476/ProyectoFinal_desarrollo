import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllPets } from "../../api/api";
import styles from "./PetDetail.module.css";

function PetDetail() {
  const { id } = useParams();
  const [pet, setPet] = useState(null);

  useEffect(() => {
    const fetchPet = async () => {
      const data = await getAllPets();
      const selected = data.find((p) => p.id === id);
      setPet(selected);
    };
    fetchPet();
  }, [id]);

  if (!pet) return <p>Cargando...</p>;

  return (
    <div className={styles.container}>
      <h2>{pet.nombre}</h2>
      <img src={pet.imagen} alt={pet.nombre} className={styles.petImg} />
      <p>{pet.descripcion}</p>
      <p><strong>Edad:</strong> {pet.edad}</p>
      <p><strong>Raza:</strong> {pet.raza}</p>
      <p><strong>Tamaño:</strong> {pet.tamaño}</p>
      <h3>Requisitos de adopción</h3>
      <p>Contactarnos, compromiso de adopción, seguimiento con fotos, cuidados responsables.</p>
    </div>
  );
}

export default PetDetail;