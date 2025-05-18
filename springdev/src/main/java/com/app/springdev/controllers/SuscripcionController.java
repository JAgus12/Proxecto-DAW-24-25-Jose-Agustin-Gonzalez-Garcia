package com.app.springdev.controllers;

import java.util.List;

import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.springdev.model.Suscripcion;
import com.app.springdev.services.SuscripcionServiceManager;

@RestController
@RequestMapping("/suscripciones")
public class SuscripcionController {

    private final SuscripcionServiceManager suscripcionServiceManager;

    public SuscripcionController(SuscripcionServiceManager suscripcionServiceManager) {
        this.suscripcionServiceManager = suscripcionServiceManager;
    }

    @GetMapping()
    @Transactional(readOnly = true)
    public List<Suscripcion> findAllSuscripciones(){
        return this.suscripcionServiceManager.findAll();
    }

    @GetMapping("/{suscripcion_id}")
    @Transactional(readOnly = true)
    public Suscripcion findSuscripcion(@PathVariable Long suscripcion_id){
        return this.suscripcionServiceManager.findById(suscripcion_id);
    }

    @PostMapping()
    @Transactional
    public Suscripcion save(@RequestBody Suscripcion suscripcion){
        return this.suscripcionServiceManager.save(suscripcion);
    }

    @DeleteMapping("/{suscripcion_id}")
    @Transactional
    public Suscripcion deleteSuscripcion(@PathVariable Long suscripcion_id){
        return this.suscripcionServiceManager.deleteById(suscripcion_id);
    }

    @PutMapping("/{suscripcion_id}")
    @Transactional
    public Suscripcion updateSuscripcion(@PathVariable Long suscripcion_id,@RequestBody Suscripcion suscripcion){
        return this.suscripcionServiceManager.update(suscripcion_id, suscripcion);
    }
}
