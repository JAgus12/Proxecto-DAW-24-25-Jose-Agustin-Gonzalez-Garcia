package com.app.springdev.services;

import java.util.List;

import com.app.springdev.model.Entorno;


public interface EntornoService {

    List<Entorno> findAll();
    Entorno findById(Long entorno_id);
    Entorno save(Entorno entorno);
    Entorno deleteById(Long entorno_id);
    Entorno update(Long entorno_id,Entorno entorno);
    Boolean existsById(Long entorno_id);
}
