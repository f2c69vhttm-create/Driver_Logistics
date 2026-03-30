# API Reference - PG Logistics Engine

Este documento detalla los endpoints y protocolos de comunicación del backend.

## Endpoint Principal
- **URL:** `GOOGLE_SCRIPT_EXEC_URL`
- **Método:** `POST`
- **Content-Type:** `application/x-www-form-urlencoded`

## Parámetros Requeridos (Payload)
| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| `auth_token` | String | Token de seguridad definido en el script. |
| `action` | String | `salida` o `entrada`. |
| `conductor` | String | Nombre del driver identificado por PIN. |
| `unidad` | String | Identificador del vehículo (Placa/ID). |
| `km_actual` | Float | Lectura actual del odómetro. |
| `latitud` | Double | Coordenada GPS de latitud. |
| `longitud` | Double | Coordenada GPS de longitud. |

## Respuestas (Response)
- **200 OK:** Registro exitoso.
- **Error:** Acceso denegado (Token inválido) o Error de servidor.
