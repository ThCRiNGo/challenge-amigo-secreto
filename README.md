
# Challenge Amigo Secreto

// [![Build Status](https://github.com/ThCRiNGo/challenge-amigo-secreto?branch=master)](https://github.com/ThCRiNGo/challenge-amigo-secreto)
Challenge del G8 de alura 2025.
Este proyecto es una aplicación web desarrollada para organizar el tradicional juego del "Amigo Secreto". La idea es que los usuarios puedan ingresar nombres de amigos, visualizar una lista actualizada y, mediante un sorteo aleatorio, determinar quién será el amigo secreto de cada participante.

## Funcionalidades

- **Agregar nombres:**  
  Permite a los usuarios ingresar nombres mediante un campo de texto y agregarlos a una lista haciendo clic en el botón "Añadir".

- **Validación de entrada:**  
  Se valida que el campo de texto no esté vacío y que el contenido ingresado sea válido. En caso contrario, se muestra una alerta solicitando un nombre correcto.

- **Visualización dinámica:**  
  Los nombres ingresados se muestran en una lista que se actualiza en tiempo real conforme se añaden nuevos nombres.

- **Sorteo aleatorio:**  
  Al hacer clic en el botón "Sortear Amigo", la aplicación selecciona de forma aleatoria un nombre de la lista y muestra el resultado en pantalla.

- **Funcionalidads extra:**  
  Se agregó un boton eliminar al lado de cada amigo ingresado, permitiendo quitarlo del listado
  Al sortear un amigo, se presenta al amigo sorteado aleatoriamente y se elimina del listado, manteniendo a los participantes restantes para un nuevo sorteo, evitando tener que ingresar todo el listado nuevamente.
  Al hacer clic en el botón "Sortear Amigo", se elimina al amigo secreto anterior.
  Debe haber al menos 2 amigos para poder realizar el sorteo.

## Tecnologías Utilizadas

- **HTML**: Estructura básica de la aplicación.
- **CSS**: Estilización y diseño visual.
- **JavaScript**: Lógica de la aplicación, validaciones, y funcionamiento del sorteo.

## Instalación y Ejecución

### Pre-requisitos

- Navegador web (Chrome, Firefox, Edge, etc.)
- [Git](https://git-scm.com/) instalado en tu máquina (opcional, para clonar el repositorio).

### Pasos para Empezar

1. **Clonar el Repositorio:**

   ```bash
   git clone https://github.com/ThCRiNGo/challenge-amigo-secreto.git

2.  **Navegar al Directorio del Proyecto:**

 ```bash
   cd challenge-amigo-secreto           
   
  ```
  3. **Abrir la Aplicación**
Abre el archivo index.html en tu navegador preferido.
(Opcional) Si usas Visual Studio Code, puedes instalar la extensión Live Server para ejecutar la aplicación de forma local.
### Licencia
Este proyecto se distribuye bajo los términos de la Unlicense.

  
  