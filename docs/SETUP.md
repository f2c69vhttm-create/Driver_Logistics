🛠️ Guía de Instalación y Configuración - PG Logistics
Siga estos pasos para desplegar el sistema de control de flota en su propia infraestructura de Google Cloud / Google Workspace.

1. Preparación de la Base de Datos
Cree una nueva hoja de cálculo en Google Sheets.

Cambie el nombre de la primera pestaña (hoja) a Registros.

En la primera fila, cree los siguientes encabezados para mantener el orden:

Columna A: Fecha/Hora

Columna B: Acción

Columna C: Conductor

Columna D: Unidad

Columna E: Villa/Miembro

Columna F: Pax

Columna G: Destino

Columna H: KM Actual

Columna I: Latitud

Columna J: Longitud

Columna K: Mapa (Link)

2. Despliegue del Backend (Servidor)
En su hoja de cálculo, vaya al menú superior: Extensiones > Apps Script.

Borre el código existente en el archivo Código.gs.

Copie y pegue el contenido del archivo backend/google-script.js de este repositorio.

Configuración de Seguridad: Localice la variable CLAVE_SECRETA al inicio del script y asigne una clave privada (ej. un PIN o frase larga).

Haga clic en el botón azul Implementar > Nueva implementación.

Tipo: Aplicación web.

Ejecutar como: Usuario actual (usted).

Acceso: Cualquier persona.

IMPORTANTE: Copie la "URL de la aplicación web" generada (termina en /exec).

3. Configuración del Frontend (App Móvil)
Abra el archivo index.html en el repositorio.

Localice la línea: const API_URL = "TU_URL_DE_APPS_SCRIPT";.

Reemplace el texto entre comillas con la URL que copió en el paso anterior.

Localice el campo oculto auth_token en el formulario y asegúrese de que coincida con la CLAVE_SECRETA que puso en el script.

4. Publicación (GitHub Pages)
Suba los cambios a su repositorio de GitHub.

Vaya a Settings > Pages.

En "Branch", seleccione main y la carpeta / (root).

Haga clic en Save.

En un par de minutos, GitHub le dará una URL (ej: https://usuario.github.io/repo). Esa es la dirección que usarán los drivers.

5. Instalación en el Dispositivo (Móvil)
Para que funcione como una App real:

Abra el enlace en Safari (iOS) o Chrome (Android).

Seleccione "Compartir" o el menú de tres puntos.

Elija la opción "Añadir a pantalla de inicio".

El icono de PG Logistics aparecerá en el menú del celular del driver.

Mantenimiento y Auditoría
Los datos se actualizarán en tiempo real en la hoja de Google Sheets.

Puede conectar esta hoja a Google Looker Studio para generar reportes visuales de uso de flota por unidad o por driver.
