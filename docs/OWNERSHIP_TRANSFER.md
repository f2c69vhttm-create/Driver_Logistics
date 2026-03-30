# Protocolo de Transferencia de Propiedad (Ownership Transfer)

Para completar la entrega del activo tecnológico, siga estos pasos:

### 1. Clonación del Repositorio
El equipo de IT de Discovery Land debe clonar este repositorio en su propia cuenta de GitHub Enterprise para control de versiones privado.

### 2. Migración del Backend (Google Cloud)
1. Abra el proyecto en Google Apps Script.
2. Vaya a **Configuración del proyecto**.
3. Cambie el ID del proyecto a un proyecto de **Google Cloud Standard** de la corporación.
4. En el menú de compartir, agregue la cuenta de administrador de IT de Discovery como "Propietario".
5. Elimine la cuenta del desarrollador original.

### 3. Actualización de Credenciales
- Genere un nuevo `auth_token` en el archivo `backend/google-script.js`.
- Actualice el `auth_token` correspondiente en el `index.html`.

### 4. Soporte
Una vez completada la migración, el sistema es 100% autónomo y reside en los servidores de Google del comprador. No requiere mantenimiento externo.
