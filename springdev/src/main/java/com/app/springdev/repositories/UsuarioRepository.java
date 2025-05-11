package com.app.springdev.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.app.springdev.model.Usuario;

@Repository
public interface UsuarioRepository extends CrudRepository<Usuario,String> {

}
