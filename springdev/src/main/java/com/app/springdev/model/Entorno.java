package com.app.springdev.model;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

public class Entorno {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long entorno_id;
    @Column(nullable = false,length = 30)
    private String nombre;
    
    
    public Entorno() {
    }


    public Entorno(Long entorno_id, String nombre) {
        this.entorno_id = entorno_id;
        this.nombre = nombre;
    }


    public Long getEntorno_id() {
        return entorno_id;
    }


    public void setEntorno_id(Long entorno_id) {
        this.entorno_id = entorno_id;
    }


    public String getNombre() {
        return nombre;
    }


    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    
    
    
}
