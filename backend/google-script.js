// CONFIGURACIÓN SENSIBLE (Solo tú la ves en el editor de Google)
const CLAVE_SECRETA = "PlayaGrande2024_Secure_Token_99"; 

function doPost(e) {
  const data = e.parameter;
  
  // 1. VALIDACIÓN DE TOKEN (Seguridad Básica)
  if (data.auth_token !== CLAVE_SECRETA) {
    return ContentService.createTextOutput("Acceso Denegado").setMimeType(ContentService.MimeType.TEXT);
  }

  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Registros");
  const kmIngresado = parseFloat(data.km_actual);
  const placa = data.unidad;

  // 2. LÓGICA DE NEGOCIO: Validar que el KM no sea menor al anterior
  const ultimoKm = obtenerUltimoKm(sheet, placa);
  if (data.action === "entrada" && kmIngresado < ultimoKm) {
     // Aquí podrías enviar una alerta automática a seguridad por email
     MailApp.sendEmail("admin@discoveryland.com", "ALERTA: KM Inconsistente", "Vehículo " + placa + " reportó menos KM que al salir.");
  }

  // 3. REGISTRO CON TIMESTAMPS Y COORDENADAS
  sheet.appendRow([
    new Date(), 
    data.action, 
    data.conductor, 
    placa, 
    data.villa, 
    data.pasajeros, 
    data.destino, 
    kmIngresado, 
    data.latitud, 
    data.longitud,
    "https://www.google.com/maps?q=" + data.latitud + "," + data.longitud // Link directo al mapa
  ]);

  return ContentService.createTextOutput("Éxito").setMimeType(ContentService.MimeType.TEXT);
}

function obtenerUltimoKm(sheet, placa) {
  const filas = sheet.getDataRange().getValues();
  for (let i = filas.length - 1; i >= 0; i--) {
    if (filas[i][3] === placa) return parseFloat(filas[i][7]);
  }
  return 0;
}
