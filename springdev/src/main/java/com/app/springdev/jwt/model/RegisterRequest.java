package com.app.springdev.jwt.model;

import java.time.LocalDate;

public class RegisterRequest {

    private String usuario;
    private String password;
    private String nombre;
    private String apellidos;
    private String email;
    private LocalDate fecha_nacimiento;


    public RegisterRequest() {
    }


    public RegisterRequest(String usuario, String password, String nombre, String apellidos, String email,
            LocalDate fecha_nacimiento) {
        this.usuario = usuario;
        this.password = password;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.email = email;
        this.fecha_nacimiento = fecha_nacimiento;
    }


    public String getUsuario() {
        return usuario;
    }


    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }


    public String getPassword() {
        return password;
    }


    public void setPassword(String password) {
        this.password = password;
    }


    public String getNombre() {
        return nombre;
    }


    public void setNombre(String nombre) {
        this.nombre = nombre;
    }


    public String getApellidos() {
        return apellidos;
    }


    public void setApellidos(String apellidos) {
        this.apellidos = apellidos;
    }


    public String getEmail() {
        return email;
    }


    public void setEmail(String email) {
        this.email = email;
    }


    public LocalDate getFecha_nacimiento() {
        return fecha_nacimiento;
    }


    public void setFecha_nacimiento(LocalDate fecha_nacimiento) {
        this.fecha_nacimiento = fecha_nacimiento;
    }


    
    
}
