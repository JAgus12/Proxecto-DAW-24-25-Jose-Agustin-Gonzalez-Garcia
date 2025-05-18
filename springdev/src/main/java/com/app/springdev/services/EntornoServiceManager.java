package com.app.springdev.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.app.springdev.model.Entorno;
import com.app.springdev.repositories.EntornoRepository;

@Service
public class EntornoServiceManager implements EntornoService {

    private final EntornoRepository entornoRepository;

    public EntornoServiceManager(EntornoRepository entornoRepository) {
        this.entornoRepository = entornoRepository;
    }

    @Override
    public Entorno deleteById(Long entorno_id) {
        Entorno entornoBorrado=this.entornoRepository.findById(entorno_id).get();
        this.entornoRepository.deleteById(entorno_id);
        return entornoBorrado;
    }

    @Override
    public Boolean existsById(Long entorno_id) {
        return this.entornoRepository.existsById(entorno_id);
    }

    @Override
    public List<Entorno> findAll() {
        return (List<Entorno>) this.entornoRepository.findAll();
    }

    @Override
    public Entorno findById(Long entorno_id) {
        return this.entornoRepository.findById(entorno_id).get();
    }

    @Override
    public Entorno save(Entorno entorno) {
        return this.entornoRepository.save(entorno);
    }

    @Override
    public Entorno update(Long entorno_id, Entorno entorno) {
        Entorno entornoModificar = this.entornoRepository.findById(entorno_id).get();
        entornoModificar.setNombre(entorno.getNombre());
        this.entornoRepository.save(entornoModificar);
        return entornoModificar;
    }

  
    

    

}
