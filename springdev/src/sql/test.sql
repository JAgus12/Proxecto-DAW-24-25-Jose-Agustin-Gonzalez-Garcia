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
