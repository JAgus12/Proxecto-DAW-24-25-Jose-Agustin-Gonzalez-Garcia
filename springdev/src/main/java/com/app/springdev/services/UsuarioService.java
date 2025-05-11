package com.app.springdev.services;

import java.util.List;

import com.app.springdev.model.Usuario;

public interface UsuarioService {

    List<Usuario> findAll();
    Usuario findById(String usuario);
    Usuario save(Usuario usuario);
    Usuario deleteById(String usuario);
    Usuario update(String usuario,Usuario user);
    Boolean existsById(String usuario);
}
