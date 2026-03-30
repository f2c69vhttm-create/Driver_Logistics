# Diccionario de Datos - Flota Discovery

Estructura de la base de datos centralizada en Google Sheets.

### Tabla: `Registros`
1. **Timestamp:** Marca de tiempo automática de la transacción (GMT-4).
2. **Accion:** Estado del vehículo al momento del registro.
3. **Conductor:** Identidad del driver responsable.
4. **Unidad:** Vehículo específico de la flota de lujo.
5. **Villa_Miembro:** Campo opcional para tracking de servicios a socios.
6. **Pax:** Cantidad de pasajeros a bordo.
7. **Destino:** Punto final del trayecto reportado.
8. **KM_Actual:** Valor numérico del odómetro (Base para auditoría).
9. **Geolocalización:** Datos crudos de GPS y link directo a Google Maps para auditoría visual.
