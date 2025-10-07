// src/components/WelcomeSection/WelcomeSection.jsx
import React from "react";
import styles from "../../pages/home/Home.module.css"; 

function WelcomeSection() {
  
  const welcomeImageUrl = "https://www.shutterstock.com/image-photo/large-group-cats-dogs-looking-260nw-2207261729.jpg"
  return (
    <>
      {/* Sección de bienvenida */}
      <section className={styles.section}>
        <h1>¡Bienvenidos!</h1>

        {/* IMAGEN USANDO UNA URL EXTERNA */}
        <img
          src={welcomeImageUrl}
          alt="Perros y gatos en el refugio"
          className={styles.welcomeImg}
        />

        <p>
          Adoptamos, cuidamos y encontramos hogares amorosos para nuestros peludos amigos.
          **En Michi House, cada vida importa**, y nuestro objetivo principal es darles una
          segunda oportunidad con familias que los valoren.
        </p>
      </section>

      {/* Quiénes somos */}
      <section className={styles.section}>
        <h2>Quiénes somos</h2>
        <p>
          Somos un refugio comprometido con la adopción responsable.
          Brindamos cuidado, amor y atención a cada mascota mientras espera un hogar definitivo.
          Nuestro objetivo es ofrecerles una segunda oportunidad a aquellos animales que han sido abandonados,
          maltratados o que simplemente no tienen un lugar donde vivir.

          Cada día trabajamos con dedicación para asegurar su bienestar físico y emocional: proporcionamos atención
          veterinaria, alimentación balanceada, espacios seguros para su descanso y, sobre todo, mucho cariño.
          Creemos que cada mascota merece una familia que la ame y la respete. Por eso, acompañamos todo el proceso de adopción
          para garantizar que cada peludo encuentre un hogar responsable, donde reciba el amor y los cuidados que merece.
          Además, promovemos la educación sobre la tenencia responsable, la importancia de la esterilización y el respeto
          hacia todos los seres vivos. En Michi-House, no solo rescatamos animales… ¡cambiamos vidas!
        </p>
      </section>

      {/* Cómo funciona la adopción */}
      <section className={styles.section}>
        <h2>Cómo funciona la adopción</h2>
        <p>
          El proceso es sencillo pero riguroso, asegurando que el emparejamiento entre
          mascota y adoptante sea el ideal para ambas partes.
        </p>
        <ul>
          <li>
            **Paso 1: Solicitud.** Contactas con nosotros para solicitar la adopción y llenar un breve formulario.
          </li>
          <li>
            **Paso 2: Entrevista y Evaluación.** Evaluamos tu hogar y tus condiciones para asegurar un lugar seguro y amoroso.
            Esto incluye una visita o video-llamada.
          </li>
          <li>
            **Paso 3: ¡Bienvenida!** Formalizas la adopción y llevas a tu nuevo amigo a casa.
          </li>
          <li>
            **Paso 4: Seguimiento.** Realizamos seguimiento post-adopción con fotos y noticias de tu nuevo amigo
            para garantizar su bienestar.
          </li>
        </ul>
      </section>

    
      <section className="datos-interesantes"> 
        <h2>Datos interesantes</h2>

        <div className="card">
          <p>
            ¿Sabías que los gatos y perros rescatados se adaptan más rápido a hogares amorosos?
            Esto se debe a que suelen ser más resilientes y agradecen profundamente el cariño
            y la seguridad que un hogar permanente les proporciona.
          </p>
        </div>

        <div className="card">
          <p>
            Adoptar en lugar de comprar salva más de una vida, ya que al adoptar también ayudas
            a liberar espacio en los refugios para que otros animales puedan ser rescatados.
          </p>
        </div>

        <div className="card">
          <p>
            Las mascotas adoptadas crean vínculos más fuertes con sus dueños, demostrando una
            lealtad y afecto especiales.
          </p>
        </div>
      </section>
    </>
  );
}

export default WelcomeSection;