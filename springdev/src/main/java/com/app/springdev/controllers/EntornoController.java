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

import com.app.springdev.model.Entorno;
import com.app.springdev.services.EntornoServiceManager;

@RestController
@RequestMapping("/entornos")
public class EntornoController {

    private final EntornoServiceManager entornoServiceManager;

    public EntornoController(EntornoServiceManager entornoServiceManager) {
        this.entornoServiceManager = entornoServiceManager;
    }

    @GetMapping()
    @Transactional(readOnly = true)
    public List<Entorno> findAllEntornos(){
        return this.entornoServiceManager.findAll();
    }

    @GetMapping("/{entorno_id}")
    @Transactional(readOnly = true)
    public Entorno findEntorno(@PathVariable Long entorno_id){
        return this.entornoServiceManager.findById(entorno_id);
    }

    @PostMapping()
    @Transactional
    public Entorno save(@RequestBody Entorno entorno){
        return this.entornoServiceManager.save(entorno);
    }

    @DeleteMapping("/{entorno_id}")
    @Transactional
    public Entorno deleteEntorno(@PathVariable Long entorno_id){
        return this.entornoServiceManager.deleteById(entorno_id);
    }

    @PutMapping("/{entorno_id}")
    @Transactional
    public Entorno updateEntorno(@PathVariable Long entorno_id,@RequestBody Entorno entorno){
        return this.entornoServiceManager.update(entorno_id, entorno);
    }

    
}
