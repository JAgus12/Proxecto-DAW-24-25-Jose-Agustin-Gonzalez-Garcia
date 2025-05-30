package com.app.springdev.services;

import java.util.List;

import com.app.springdev.model.Tarea;

public interface TareaService {

    List<Tarea> findAll();
    List<Tarea> findTareaUsuario(String usuario);
    Tarea findById(Long tarea_id);
    Tarea save(Tarea tarea);
    Tarea deleteById(Long tarea_id);
    Tarea update(Long tarea_id,Tarea tarea);
    Boolean existsById(Long tarea_id);
}
