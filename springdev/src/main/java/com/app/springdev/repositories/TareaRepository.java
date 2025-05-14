package com.app.springdev.repositories;

import org.springframework.data.repository.CrudRepository;

import com.app.springdev.model.Tarea;

public interface TareaRepository extends CrudRepository<Long,Tarea> {

}
