// src/pages/home/Home.jsx
import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { getAllPets, deletePet } from "../../api/api";
import { useNavigate, Link } from "react-router-dom"; 
import styles from "./Home.module.css";
// IMPORTACIÓN DEL COMPONENTE LOCAL
import WelcomeSection from "./WelcomeSection"; 

function Home() {
  const { isAdmin } = useContext(UserContext);
  const [pets, setPets] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPets = async () => {
      const data = await getAllPets();
      setPets(data);
    };
    fetchPets();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("¿Eliminar esta mascota?")) {
      await deletePet(id);
      setPets(pets.filter(pet => pet.id !== id));
    }
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    <div className={styles.container}>
      {/* SECCIÓN REEMPLAZADA POR EL COMPONENTE */}
      <WelcomeSection />

      <h2>Mascotas en Adopción</h2>
      <div className={styles.grid}>
        {pets.map((pet) => (
          <div key={pet.id} className={styles.card}>
            <Link to={`/pet/${pet.id}`} className={styles.petLink}>
              <img src={pet.imagen} alt={pet.nombre} className={styles.petImg} />
              
              <h3>{pet.nombre}</h3> 
            </Link>

            {isAdmin && (
              <div className={styles.adminBtns}>
                <button onClick={() => navigate(`/edit/${pet.id}`)}>Editar</button>
                <button onClick={() => handleDelete(pet.id)}>Eliminar</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;