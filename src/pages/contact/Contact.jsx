import React from "react";
import { useForm } from "react-hook-form"; 
import styles from "./Contact.module.css";

function Contact() {
  // 🚨 CAMBIO CLAVE: Configuración del useForm
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting } 
  } = useForm({
    // Valida cuando el usuario sale del campo
    mode: "onBlur", 
  });

  // Patrón (regex) que NO permite dígitos (números) para campos de texto
  const NO_DIGITS_PATTERN = /^[^0-9]+$/;

  const onSubmit = (data) => {
    // Aquí iría tu lógica de envío (axios.post, fetch, etc.)
    console.log("Datos a enviar (validados):", data);
    alert("Mensaje enviado con éxito y validado por React Hook Form ✅");
  };

  return (
    <div className={styles.container}>
      <h2>Contacto</h2>
      
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        
        {/* --- CAMPO 1: NOMBRE --- */}
        <div>
          <input 
            placeholder="Nombre (obligatorio, sin números)" 
            type="text"
            {...register("nombre", { 
              required: "El nombre es obligatorio", // 🚨 Mensaje de campo obligatorio
              minLength: {
                value: 3,
                message: "El nombre debe tener al menos 3 caracteres"
              },
              pattern: {
                value: NO_DIGITS_PATTERN, 
                message: "El nombre no debe contener números (dígitos)"
              }
            })} 
          />
          {/* Muestra el error */}
          {errors.nombre && <p className={styles.error}>{errors.nombre.message}</p>}
        </div>

        {/* --- CAMPO 2: EMAIL --- */}
        <div>
          <input 
            placeholder="Email (obligatorio, formato válido)" 
            type="email"
            {...register("email", { 
              required: "El email es obligatorio", // 🚨 Mensaje de campo obligatorio
              pattern: {
                value: /^\S+@\S+\.\S+$/, 
                message: "El formato del email no es válido"
              }
            })} 
          />
          {/* Muestra el error */}
          {errors.email && <p className={styles.error}>{errors.email.message}</p>}
        </div>

        {/* --- CAMPO 3: MENSAJE --- */}
        <div>
          <textarea 
            placeholder="Mensaje (obligatorio, sin números, max 500)"
            {...register("mensaje", {
                required: "El mensaje es obligatorio", // 🚨 Mensaje de campo obligatorio
                maxLength: {
                    value: 500,
                    message: "El mensaje no debe exceder los 500 caracteres"
                },
                pattern: {
                    value: NO_DIGITS_PATTERN, 
                    message: "El mensaje no debe contener números (dígitos)"
                }
            })}
          ></textarea>
          {/* Muestra el error */}
          {errors.mensaje && <p className={styles.error}>{errors.mensaje.message}</p>}
        </div>

        {/* Botón de envío */}
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Enviando..." : "Enviar"}
        </button>
      </form>
    </div>
  );
}

export default Contact;