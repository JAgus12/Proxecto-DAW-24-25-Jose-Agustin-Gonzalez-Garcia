package com.app.springdev.model;

import java.sql.Timestamp;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "tareas")
public class Tarea {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long tarea_id;
    @Column(nullable = false,length = 30)
    private String titulo;
    @Column(nullable = false,length = 50)
    private String descripcion;
    @Column(nullable = false,length = 30)
    private String proyecto;
    @Column(nullable = false,length = 40)
    private String estado;
    @Column(nullable = false,length = 30)
    private String tiempo;
    @CreationTimestamp
    private Timestamp fecha_alta;
    @Column(nullable = false)
    private Timestamp fecha_limite;

    @ManyToOne
    @JoinColumn(name = "entorno_id")
    private Entorno entorno;
    
    
    public Tarea() {
    }


    public Tarea(Long tarea_id, String titulo, String descripcion, String proyecto, String estado, String tiempo,
            Timestamp fecha_alta, Timestamp fecha_limite) {
        this.tarea_id = tarea_id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.proyecto = proyecto;
        this.estado = estado;
        this.tiempo = tiempo;
        this.fecha_alta = fecha_alta;
        this.fecha_limite = fecha_limite;
    }


    public Long getTarea_id() {
        return tarea_id;
    }


    public void setTarea_id(Long tarea_id) {
        this.tarea_id = tarea_id;
    }


    public String getTitulo() {
        return titulo;
    }


    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }


    public String getDescripcion() {
        return descripcion;
    }


    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }


    public String getProyecto() {
        return proyecto;
    }


    public void setProyecto(String proyecto) {
        this.proyecto = proyecto;
    }


    public String getEstado() {
        return estado;
    }


    public void setEstado(String estado) {
        this.estado = estado;
    }


    public String getTiempo() {
        return tiempo;
    }


    public void setTiempo(String tiempo) {
        this.tiempo = tiempo;
    }


    public Timestamp getFecha_alta() {
        return fecha_alta;
    }


    public void setFecha_alta(Timestamp fecha_alta) {
        this.fecha_alta = fecha_alta;
    }


    public Timestamp getFecha_limite() {
        return fecha_limite;
    }


    public void setFecha_limite(Timestamp fecha_limite) {
        this.fecha_limite = fecha_limite;
    }

    

    

    
}
