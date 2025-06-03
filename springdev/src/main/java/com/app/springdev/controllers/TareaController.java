package com.app.springdev.controllers;

import java.util.List;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.springdev.dto.CompartidoDto;
import com.app.springdev.model.Tarea;
import com.app.springdev.services.TareaServiceManager;

@RestController
@RequestMapping("/tareas")
public class TareaController {

    private final TareaServiceManager tareaServiceManager;

    public TareaController(TareaServiceManager tareaServiceManager) {
        this.tareaServiceManager = tareaServiceManager;
    }

    @GetMapping()
    @Transactional(readOnly = true)
    public List<Tarea> findAllTareas(){
        return this.tareaServiceManager.findAll();
    }

    @GetMapping("/usuario/{usuario}")
    @Transactional(readOnly = true)
    public List<Tarea> findTareaUsuario(@PathVariable String usuario){
        return this.tareaServiceManager.findTareaUsuario(usuario);
    }

    @GetMapping("/{tarea_id}")
    @Transactional(readOnly = true)
    public Tarea findTarea(@PathVariable Long tarea_id){
        return this.tareaServiceManager.findById(tarea_id);
    }

    @PostMapping()
    @Transactional
    public Tarea save(@RequestBody Tarea tarea){
        return this.tareaServiceManager.save(tarea);
    }

    @PostMapping("/compartir")
    @Transactional
    public ResponseEntity<?> compartirTarea(@RequestBody CompartidoDto compartir){
        this.tareaServiceManager.newCompartir(compartir);
        return ResponseEntity.ok("Tarea Compartida con " + compartir.getUsuario());
    }

    @DeleteMapping("/{tarea_id}")
    @Transactional
    public Tarea deleteTarea(@PathVariable Long tarea_id){
        return this.tareaServiceManager.deleteById(tarea_id);
    }

    @DeleteMapping("/compartir/{tarea_id}")
    @Transactional
    public ResponseEntity<?> deleteTareaCompartir(@PathVariable Long tarea_id){
        this.tareaServiceManager.eliminarTareaCompartida(tarea_id);
        return ResponseEntity.ok(Map.of("mensaje", "Ya no esta compartido"));
    }

    @PutMapping("/{tarea_id}")
    @Transactional
    public Tarea updateTarea(@PathVariable Long tarea_id,@RequestBody Tarea tarea){
        return this.tareaServiceManager.update(tarea_id, tarea);
    }
}
