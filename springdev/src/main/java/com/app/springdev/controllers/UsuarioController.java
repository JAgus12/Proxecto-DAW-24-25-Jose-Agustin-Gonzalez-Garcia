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

import com.app.springdev.model.Usuario;
import com.app.springdev.services.UsuarioServiceManager;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

    private final UsuarioServiceManager usuarioServiceManager;

    public UsuarioController(UsuarioServiceManager usuarioServiceManager) {
        this.usuarioServiceManager = usuarioServiceManager;
    }

    @GetMapping()
    @Transactional(readOnly = true)
    public List<Usuario> findAllUsuarios(){
        return this.usuarioServiceManager.findAll();
    }

    @GetMapping("/{usuario}")
    @Transactional(readOnly = true)
    public Usuario findUsuario(@PathVariable String usuario){
        return this.usuarioServiceManager.findById(usuario);
    }

    @PostMapping()
    @Transactional
    public Usuario save(@RequestBody Usuario usuario){
        return this.usuarioServiceManager.save(usuario);
    }

    @DeleteMapping("/{usuario}")
    @Transactional
    public Usuario deleteUsuario(@PathVariable String usuario){
        return this.usuarioServiceManager.deleteById(usuario);
    }

    @PutMapping("/{usuario}")
    @Transactional
    public Usuario updateUsuario(@PathVariable String usuario,@RequestBody Usuario user){
        return this.usuarioServiceManager.update(usuario, user);
    }
    
}
