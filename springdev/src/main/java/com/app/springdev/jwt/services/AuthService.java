package com.app.springdev.jwt.services;

import java.sql.Timestamp;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.app.springdev.jwt.model.AuthResponse;
import com.app.springdev.jwt.model.LoginRequest;
import com.app.springdev.jwt.model.RegisterRequest;
import com.app.springdev.model.Rol;
import com.app.springdev.model.Suscripcion;
import com.app.springdev.model.TipoSuscripcion;
import com.app.springdev.model.Usuario;
import com.app.springdev.repositories.SuscripcionRepository;
import com.app.springdev.repositories.UsuarioRepository;

@Service
public class AuthService {

    private final UsuarioRepository usuarioRepository;
    private final SuscripcionRepository suscripcionRepository;
    private final JwtService jwtService;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;

    

    public AuthService(UsuarioRepository usuarioRepository, SuscripcionRepository suscripcionRepository,
            JwtService jwtService, PasswordEncoder passwordEncoder, AuthenticationManager authenticationManager) {
        this.usuarioRepository = usuarioRepository;
        this.suscripcionRepository = suscripcionRepository;
        this.jwtService = jwtService;
        this.passwordEncoder = passwordEncoder;
        this.authenticationManager = authenticationManager;
    }

    public Object login(LoginRequest request) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getUsuario(), request.getPassword()));
        Usuario user=usuarioRepository.findById(request.getUsuario()).get();
        return new AuthResponse(jwtService.getToken(user));
    }

    public Object registro(RegisterRequest request) {
        Usuario user=new Usuario();
        Suscripcion suscripcion=new Suscripcion();
        suscripcion.setFecha_alta(new Timestamp(System.currentTimeMillis()));
        suscripcion.setTipo(TipoSuscripcion.GRATIS);
        user.setUsuario(request.getUsuario());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setNombre(request.getNombre());
        user.setApellidos(request.getApellidos());
        user.setEmail(request.getEmail());
        user.setFecha_nacimiento(request.getFecha_nacimiento());
        user.setRol(Rol.USER);
        user.setFecha_alta(new Timestamp(System.currentTimeMillis()));
        user.setSuscripcion(suscripcion);
        this.suscripcionRepository.save(suscripcion);
        this.usuarioRepository.save(user);
        return new AuthResponse(jwtService.getToken(user));
    }

   
}
