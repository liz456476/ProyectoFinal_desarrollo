Proyecto CRUD: Michi House (Gestión de Inventario y Contacto)
Este proyecto es una aplicación web de inventario simple diseñada para la gestión de Mascotas en Adopción (CRUD) y la administración de Mensajes de Contacto, utilizando React.js y Firebase Firestore como base de datos en tiempo real.

Características Implementadas
El proyecto cumple con los requisitos técnicos para demostrar el dominio de un stack moderno de React para aplicaciones de gestión de datos:

Característica	Detalle
CRUD Completo	Capacidad para Crear, Leer, Actualizar y Eliminar registros de mascotas.
Base de Datos	Conexión a la base de datos en tiempo real Firebase Firestore.
Formularios Avanzados	Gestión de los formularios de Creación y Edición mediante la librería React Hook Form.
Validaciones	Inclusión de validaciones declarativas (campos obligatorios, formato de URL, límites numéricos) y visualización de mensajes de error.
Estilos	Uso de CSS Modules para la modularización de estilos y un diseño responsivo.
Control de Acceso	Funcionalidad para alternar entre el modo 'Usuario' (solo lectura) y 'Administrador' (permite acciones CRUD).
Navegación	Enrutamiento manejado por React Router DOM.

Exportar a Hojas de cálculo
🛠️ Guía de Instalación y Configuración Local
Siga los siguientes pasos para levantar y ejecutar el proyecto en su entorno de desarrollo local.

Prerrequisitos
Node.js (versión 16 o superior)

npm o yarn

Una cuenta de Firebase con un proyecto configurado.

Pasos
Clonar el repositorio:

Bash

git clone https://docs.github.com/es/repositories
cd nombre-del-repositorio
Instalar dependencias:

Bash

npm install
Configurar Variables de Entorno:
a. Cree un archivo llamado .env en la raíz del proyecto.
b. Inserte las credenciales de su proyecto de Firebase obtenidas desde la Consola de Firebase.

Fragmento de código

REACT_APP_FIREBASE_API_KEY="SU_API_KEY"
REACT_APP_FIREBASE_AUTH_DOMAIN="SU_AUTH_DOMAIN"
REACT_APP_FIREBASE_PROJECT_ID="SU_PROJECT_ID"
REACT_APP_FIREBASE_STORAGE_BUCKET="SU_STORAGE_BUCKET"
REACT_APP_FIREBASE_MESSAGING_SENDER_ID="SU_MESSAGING_SENDER_ID"
REACT_APP_FIREBASE_APP_ID="SU_APP_ID"
Iniciar el servidor de desarrollo:

Bash

npm start
La aplicación se abrirá en http://localhost:3000.

☁️ Despliegue en Vercel
El proyecto está configurado para un Despliegue Automático mediante la integración de Vercel con GitHub. Una vez configuradas las Variables de Entorno en el Dashboard de Vercel, cada git push a la rama principal (generalmente main) activará una nueva construcción y despliegue del sitio en la URL pública.