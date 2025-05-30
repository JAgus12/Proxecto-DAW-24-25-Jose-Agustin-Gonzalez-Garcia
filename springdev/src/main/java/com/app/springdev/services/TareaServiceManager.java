package com.app.springdev.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.app.springdev.model.Tarea;
import com.app.springdev.repositories.TareaRepository;
import com.app.springdev.repositories.UsuarioRepository;

@Service
public class TareaServiceManager implements TareaService {

    private final TareaRepository tareaRepository;
    private final UsuarioRepository usuarioRepository;

    
    public TareaServiceManager(TareaRepository tareaRepository, UsuarioRepository usuarioRepository) {
        this.tareaRepository = tareaRepository;
        this.usuarioRepository = usuarioRepository;
    }

    @Override
    public Tarea deleteById(Long tarea_id) {
        Tarea tareaBorrada=this.tareaRepository.findById(tarea_id).get();
        this.tareaRepository.deleteById(tarea_id);
        return tareaBorrada;
    }

    @Override
    public Boolean existsById(Long tarea_id) {
        return this.tareaRepository.existsById(tarea_id);
    }

    @Override
    public List<Tarea> findAll() {
        return (List<Tarea>) this.tareaRepository.findAll();
    }

    @Override
    public Tarea findById(Long tarea_id) {
        return this.tareaRepository.findById(tarea_id).get();
    }

    @Override
    public Tarea save(Tarea tarea) {
        return this.tareaRepository.save(tarea);
    }

    @Override
    public Tarea update(Long tarea_id, Tarea tarea) {
        Tarea tareaModificar=this.tareaRepository.findById(tarea_id).get();
        tareaModificar.setDescripcion(tarea.getDescripcion());
        tareaModificar.setEntorno(tarea.getEntorno());
        tareaModificar.setEstado(tarea.getEstado());
        tareaModificar.setFecha_limite(tarea.getFecha_limite());
        tareaModificar.setProyecto(tarea.getProyecto());
        tareaModificar.setTiempo(tarea.getTiempo());
        tareaModificar.setTitulo(tarea.getTitulo());
        this.tareaRepository.save(tareaModificar);
        return tareaModificar;
    }

    @Override
    public List<Tarea> findTareaUsuario(String usuario) {
        return this.tareaRepository.findTareaUsuario(usuario);
    }

    

    
}
