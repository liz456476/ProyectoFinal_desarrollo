import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"; 
import { getAllPets, updatePet } from "../../api/api";
import styles from "./EditPet.module.css";

function EditPet() {
    const { id } = useParams();
    const navigate = useNavigate();

    const { 
        register, 
        handleSubmit, 
        formState: { errors }, 
        reset 
    } = useForm();

    // Cargar datos de la mascota y establecerlos como valores iniciales del formulario
    useEffect(() => {
        const fetchPet = async () => {
            // Nota: Podrías optimizar esto usando getPetById(id) si la tienes en tu API
            const pets = await getAllPets(); 
            const petToEdit = pets.find(p => p.id === id);
            
            if (petToEdit) {
                // Rellena el formulario con los datos existentes
                reset(petToEdit); 
            }
        };
        fetchPet();
    }, [id, reset]);

    const isValidUrl = (value) => {
        try {
            new URL(value);
            return true;
        } catch (e) {
            return false;
        }
    };

    // Función que se ejecuta solo si RHF valida los campos
    const onSubmit = async (data) => {
        try {
            await updatePet(id, data); 
            alert("Mascota actualizada correctamente 🐾");
            navigate("/"); 
        } catch (error) {
             alert("Hubo un error al actualizar la mascota.");
             console.error("Error al actualizar:", error);
        }
    };

    return (
        <div className={styles.container}>
            <h2>Editar Mascota</h2>
            
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

                {/* === Input: Edad === */}
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
                    placeholder="Tamaño"
                    {...register("tamaño", { 
                        required: "El tamaño es obligatorio." 
                    })}
                />
                {errors.tamaño && <p className={styles.error}>{errors.tamaño.message}</p>}
                
                {/* === Input: Imagen === */}
                <input
                    placeholder="URL de la imagen"
                    {...register("imagen", { 
                        required: "La URL es obligatoria.",
                        validate: (value) => isValidUrl(value) || "Debe ser una URL válida."
                    })}
                />
                {errors.imagen && <p className={styles.error}>{errors.imagen.message}</p>}
                
                <button type="submit">Guardar cambios</button>
            </form>
        </div>
    );
}

export default EditPet;