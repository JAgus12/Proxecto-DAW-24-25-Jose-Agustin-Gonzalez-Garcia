package com.app.springdev.services;

import java.time.LocalDate;
import java.util.List;

import com.app.springdev.model.Suscripcion;

public class SuscripcionServiceManager implements SuscripcionService {

    private final SuscripcionService suscripcionService;

    public SuscripcionServiceManager(SuscripcionService suscripcionService) {
        this.suscripcionService = suscripcionService;
    }

    @Override
    public Suscripcion deleteById(Long suscripcion_id) {
       Suscripcion suscripcionBorrada = this.suscripcionService.findById(suscripcion_id);
       this.suscripcionService.deleteById(suscripcion_id);
       return suscripcionBorrada;
    }

    @Override
    public Boolean existsById(Long suscripcion_id) {
        return this.suscripcionService.existsById(suscripcion_id);
    }

    @Override
    public List<Suscripcion> findAll() {
        return (List<Suscripcion>) this.suscripcionService.findAll();
    }

    @Override
    public Suscripcion findById(Long suscripcion_id) {
        return this.suscripcionService.findById(suscripcion_id);
    }

    @Override
    public Suscripcion save(Suscripcion suscripcion) {
       return this.suscripcionService.save(suscripcion);
    }

    @Override
    public Suscripcion update(Long suscripcion_id, Suscripcion suscripcion) {
        Suscripcion suscripcionModificar=this.suscripcionService.findById(suscripcion_id);
        suscripcionModificar.setFecha_alta(suscripcion.getFecha_alta());
        suscripcionModificar.setFecha_fin(suscripcion.getFecha_fin());
        return this.suscripcionService.save(suscripcionModificar);


    }

    
}
