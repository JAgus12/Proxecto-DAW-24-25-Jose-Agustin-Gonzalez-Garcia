-- Active: 1744285010485@@127.0.0.1@3306@springdev
-- Usuario ADMIN
INSERT INTO usuarios (
    usuario,
    nombre,
    apellidos,
    email,
    password,
    rol,
    fecha_nacimiento,
    fecha_alta,
    suscripcion
) VALUES (
    'admin',
    'Administrador',
    'Del Sistema',
    'admin@correo.com',
    'admin1234',              -- El sistema la hasheará
    'ADMIN',
    '1990-01-01',
    NOW(6),
    2                         -- ID de suscripción PREMIUM
);

-- Usuario USER
INSERT INTO usuarios (
    usuario,
    nombre,
    apellidos,
    email,
    password,
    rol,
    fecha_nacimiento,
    fecha_alta,
    suscripcion
) VALUES (
    'juan123',
    'Juan',
    'Pérez',
    'juan@correo.com',
    'juanpass',               -- El sistema la hasheará
    'USER',
    '2000-05-15',
    NOW(6),
    1                         -- ID de suscripción GRATIS
);


-- Suscripción GRATIS
INSERT INTO suscripciones (
    fecha_alta,
    fecha_fin,
    tipo
) VALUES (
    NOW(6),
    NULL,               -- sin fecha fin para gratis
    'GRATIS'
);

-- Suscripción PREMIUM (20 días de duración)
INSERT INTO suscripciones (
    fecha_alta,
    fecha_fin,
    tipo
) VALUES (
    NOW(6),
    DATE_ADD(NOW(6), INTERVAL 20 DAY),
    'PREMIUM'
);

INSERT INTO entornos (nombre) VALUES 
('Local'),
('Desarrollo'),
('Testing'),
('Integración'),
('Staging'),
('Producción');


INSERT INTO tareas (entorno, fecha_alta, fecha_limite, proyecto, tiempo, titulo, estado, descripcion, usuario)
VALUES 
(1, NOW(), '2025-06-10 18:00:00.000000', 'SpringDev', '3 horas', 'Implementar login', 'En desarrollo', 'Crear sistema de autenticación JWT', 'juan123'),

(3, NOW(), '2025-06-15 23:59:00.000000', 'SpringDev', '1 hora', 'Diseñar base de datos', 'Pendiente', 'Definir tablas y relaciones', 'juan123');
