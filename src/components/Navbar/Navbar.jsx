// src/components/Navbar/Navbar.jsx
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import styles from "./Navbar.module.css";

function Navbar() {
  const { isAdmin, toggleAdmin } = useContext(UserContext);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">
          <img
            src="https://img.freepik.com/vector-premium/gato-negro-nariz-rosa-circulo-amarillo-fondo-amarillo_772298-108841.jpg"
            alt="Michi House"
            className={styles.logoImg}
          />
          <span>Michi House</span>
        </Link>
      </div>
      <ul className={styles.navLinks}>
        <li><Link to="/">Inicio</Link></li>
        {isAdmin && <li><Link to="/add">Agregar Mascota</Link></li>}
        <li><Link to="/contact">Contacto</Link></li>
      </ul>
      <button className={styles.modeBtn} onClick={toggleAdmin}>
        Modo: {isAdmin ? "Administrador" : "Usuario"}
      </button>
    </nav>
  );
}

export default Navbar;
