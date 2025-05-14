package com.app.springdev.model;


import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.PostPersist;
import jakarta.persistence.Table;

import java.sql.Timestamp;
import java.time.LocalDateTime;

@Entity
@Table(name = "suscripciones")
public class Suscripcion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long suscripcion_id;
    @CreationTimestamp
    @Column(nullable = false)
    private Timestamp fecha_alta;
    @Column(nullable = false)
    private Timestamp fecha_fin;

    @OneToOne(mappedBy = "suscripcion")
    private Usuario usuario;
    
    
    public Suscripcion() {
    }

    public Suscripcion(Long suscripcion_id, Timestamp fecha_alta, Timestamp fecha_fin) {
        this.suscripcion_id = suscripcion_id;
        this.fecha_alta = fecha_alta;
        this.fecha_fin = fecha_fin;
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

    @PostPersist
    public void asignarFecha(){
        this.fecha_fin=Timestamp.valueOf(LocalDateTime.now().plusMonths(1));
    }

    
    
    
}
