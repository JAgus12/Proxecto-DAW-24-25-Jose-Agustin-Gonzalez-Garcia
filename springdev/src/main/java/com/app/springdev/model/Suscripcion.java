package com.app.springdev.model;


import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

import java.sql.Timestamp;

@Entity
@Table(name = "suscripciones")
public class Suscripcion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long suscripcion_id;
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private TipoSuscripcion tipo;
    @CreationTimestamp
    @Column(nullable = false)
    private Timestamp fecha_alta;
    @Column(nullable = true)
    private Timestamp fecha_fin;

    @OneToOne(mappedBy = "suscripcion")
    private Usuario usuario;
    
    
    public Suscripcion() {
    }

    public Suscripcion(Long suscripcion_id, TipoSuscripcion tipo, Timestamp fecha_alta, Timestamp fecha_fin,
            Usuario usuario) {
        this.suscripcion_id = suscripcion_id;
        this.tipo = tipo;
        this.fecha_alta = fecha_alta;
        this.fecha_fin = fecha_fin;
        this.usuario = usuario;
    }


    public Long getSuscripcion_id() {
        return suscripcion_id;
    }

    public void setSuscripcion_id(Long suscripcion_id) {
        this.suscripcion_id = suscripcion_id;
    }

    public Timestamp getFecha_alta() {
        return fecha_alta;
    }

    public void setFecha_alta(Timestamp fecha_alta) {
        this.fecha_alta = fecha_alta;
    }

    public Timestamp getFecha_fin() {
        return fecha_fin;
    }

    public void setFecha_fin(Timestamp fecha_fin) {
        this.fecha_fin = fecha_fin;
    }

    public TipoSuscripcion getTipo() {
        return tipo;
    }

    public void setTipo(TipoSuscripcion tipo) {
        this.tipo = tipo;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }


    

    
    
    
}
