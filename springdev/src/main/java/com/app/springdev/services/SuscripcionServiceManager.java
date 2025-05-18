package com.app.springdev.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.app.springdev.model.Suscripcion;
import com.app.springdev.repositories.SuscripcionRepository;

@Service
public class SuscripcionServiceManager implements SuscripcionService {

    private final SuscripcionRepository suscripcionRepository;

    
    public SuscripcionServiceManager(SuscripcionRepository suscripcionRepository) {
        this.suscripcionRepository = suscripcionRepository;
    }

    @Override
    public Suscripcion deleteById(Long suscripcion_id) {
       Suscripcion suscripcionBorrada = this.suscripcionRepository.findById(suscripcion_id).get();
       this.suscripcionRepository.deleteById(suscripcion_id);
       return suscripcionBorrada;
    }

    @Override
    public Boolean existsById(Long suscripcion_id) {
        return this.suscripcionRepository.existsById(suscripcion_id);
    }

    @Override
    public List<Suscripcion> findAll() {
        return (List<Suscripcion>) this.suscripcionRepository.findAll();
    }

    @Override
    public Suscripcion findById(Long suscripcion_id) {
        return this.suscripcionRepository.findById(suscripcion_id).get();
    }

    @Override
    public Suscripcion save(Suscripcion suscripcion) {
       return this.suscripcionRepository.save(suscripcion);
    }

    @Override
    public Suscripcion update(Long suscripcion_id, Suscripcion suscripcion) {
        Suscripcion suscripcionModificar=this.suscripcionRepository.findById(suscripcion_id).get();
        suscripcionModificar.setFecha_alta(suscripcion.getFecha_alta());
        suscripcionModificar.setFecha_fin(suscripcion.getFecha_fin());
        suscripcionModificar.setTipo(suscripcion.getTipo());
        this.suscripcionRepository.save(suscripcionModificar);
        return suscripcionModificar;

    }

    
}
