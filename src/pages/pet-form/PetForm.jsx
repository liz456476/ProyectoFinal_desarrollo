import React from "react";
import { useForm } from "react-hook-form";
import { addPet } from "../../api/api";
import styles from "./PetForm.module.css";

function PetForm() {
  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
    reset 
  } = useForm();

  const isValidUrl = (value) => {
    try {
      new URL(value);
      return true;
    } catch (e) {
      return false;
    }
  };

  const onSubmit = async (data) => {
    try {
      await addPet(data);
      alert("Mascota agregada correctamente 🐾");
      reset(); 
    } catch (error) {
      alert("Hubo un error al agregar la mascota.");
      console.error("Error al añadir mascota:", error);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Agregar nueva mascota</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        
        {/* === Input: Nombre === */}
        <input 
          placeholder="Nombre" 
          {...register("nombre", { 
            required: "El nombre es obligatorio.",
            minLength: { value: 3, message: "Mínimo 3 caracteres." }
          })} 
        />
        {errors.nombre && <p className={styles.error}>{errors.nombre.message}</p>}

        {/* === Input: Descripción === */}
        <input 
          placeholder="Descripción" 
          {...register("descripcion", { 
            required: "La descripción es obligatoria." 
          })} 
        />
        {errors.descripcion && <p className={styles.error}>{errors.descripcion.message}</p>}

        {/* === Input: Edad (validación numérica) === */}
        <input 
          type="number"
          placeholder="Edad" 
          {...register("edad", { 
            required: "La edad es obligatoria.",
            min: { value: 0, message: "La edad no puede ser negativa." },
            valueAsNumber: true 
          })} 
        />
        {errors.edad && <p className={styles.error}>{errors.edad.message}</p>}

        {/* === Input: Raza === */}
        <input 
          placeholder="Raza" 
          {...register("raza", { 
            required: "La raza es obligatoria." 
          })} 
        />
        {errors.raza && <p className={styles.error}>{errors.raza.message}</p>}

        {/* === Input: Tamaño === */}
        <input 
          placeholder="Tamaño (ej. Pequeño, Mediano)" 
          {...register("tamaño", { 
            required: "El tamaño es obligatorio." 
          })} 
        />
        {errors.tamaño && <p className={styles.error}>{errors.tamaño.message}</p>}

        {/* === Input: Imagen (validación de formato URL) === */}
        <input 
          placeholder="URL de Imagen" 
          {...register("imagen", { 
            required: "La URL de la imagen es obligatoria.",
            validate: (value) => isValidUrl(value) || "Debe ser una URL válida."
          })} 
        />
        {errors.imagen && <p className={styles.error}>{errors.imagen.message}</p>}

        <button type="submit">Agregar Mascota</button>
      </form>
    </div>
  );
}

export default PetForm;