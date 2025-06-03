package com.app.springdev.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

import com.app.springdev.model.Tarea;

public interface TareaRepository extends CrudRepository<Tarea,Long> {
    @Query(value = "SELECT t.tarea_id,t.titulo,t.descripcion,t.entorno,t.estado,t.fecha_alta,t.fecha_limite,t.proyecto,t.tiempo,t.usuario FROM tareas t WHERE t.usuario=?1",nativeQuery = true)
    List<Tarea> findTareaUsuario(String usuario);

    @Modifying
    @Transactional
    @Query(value = "DELETE FROM tareas_compartidas WHERE tarea_id=?1",nativeQuery = true)
    void eliminarTareaCompartida(Long tarea_id);

}
