package com.app.springdev.services;

import java.util.List;

import com.app.springdev.model.Suscripcion;

public interface SuscripcionService {

    List<Suscripcion> findAll();
    Suscripcion findById(Long suscripcion_id);
    Suscripcion save(Suscripcion suscripcion);
    Suscripcion deleteById(Long suscripcion_id);
    Suscripcion update(Long suscripcion_id,Suscripcion suscripcion);
    Boolean existsById(Long suscripcion_id);
}
