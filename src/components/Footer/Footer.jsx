// src/components/Footer/Footer.jsx
import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>🐾 Michi House © 2025. Todos los derechos reservados.</p>
      <p>📧 michihouse@gmail.com | 📞 +591 700-12345</p>
    </footer>
  );
}

export default Footer;