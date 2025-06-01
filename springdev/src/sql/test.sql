
INSERT INTO entornos (nombre) VALUES 
('Local'),
('Desarrollo'),
('Testing'),
('Integración'),
('Staging'),
('Producción');



/* Json */

{
  "usuario": "maria123",
  "password": "claveSegura123",
  "nombre": "María",
  "apellidos": "López García",
  "email": "maria@example.com",
  "fecha_nacimiento": "1995-08-20"
}

{
  "usuario": "maria123",
  "password": "claveSegura123"
}


{
  "entorno": {
    "entorno_id": 1
  },
  "fecha_limite": "2025-06-10T16:00:00",  // formato ISO 8601
  "proyecto": "SpringDev",
  "tiempo": "3 horas",
  "titulo": "Implementar login",
  "estado": "En desarrollo",
  "descripcion": "Crear sistema de autenticación JWT",
  "usuario": {
    "usuario": "maria123"
  }
}

