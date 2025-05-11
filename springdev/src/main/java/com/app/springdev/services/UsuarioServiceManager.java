package com.app.springdev.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.app.springdev.model.Usuario;
import com.app.springdev.repositories.UsuarioRepository;

@Service
public class UsuarioServiceManager implements UsuarioService {

    private final UsuarioRepository usuarioRepository;

    
    public UsuarioServiceManager(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    @Override
    public Usuario deleteById(String usuario) {
       Usuario usuarioborrado=this.usuarioRepository.findById(usuario).get();
       this.usuarioRepository.deleteById(usuario);
       return usuarioborrado;
    }

    @Override
    public Boolean existsById(String usuario) {
        return this.usuarioRepository.existsById(usuario);
    }

    @Override
    public List<Usuario> findAll() {
        return (List<Usuario>) this.usuarioRepository.findAll();
    }

    @Override
    public Usuario findById(String usuario) {
        return this.usuarioRepository.findById(usuario).get();
    }

    @Override
    public Usuario save(Usuario usuario) {
        return this.usuarioRepository.save(usuario);
    }

    @Override
    public Usuario update(String usuario, Usuario user) {
        Usuario usuarioModificar=this.usuarioRepository.findById(usuario).get();
        usuarioModificar.setNombre(user.getNombre());
        usuarioModificar.setApellidos(user.getApellidos());
        usuarioModificar.setEmail(user.getEmail());
        usuarioModificar.setFecha_nacimiento(user.getFecha_nacimiento());
        usuarioModificar.setUsuario(user.getUsuario());
        usuarioModificar.setPassword(user.getPassword());
        usuarioModificar.setPremium(user.isPremium());
        return this.usuarioRepository.save(usuarioModificar);
    }

    

}
