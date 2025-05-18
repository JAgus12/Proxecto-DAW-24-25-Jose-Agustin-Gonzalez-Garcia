package com.app.springdev.model;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Size;
import java.sql.Timestamp;
import java.util.List;


@Entity
@Table(name = "usuarios")
public class Usuario {

    @Id
    private String usuario;
    @Column(nullable = false)
    @Size(min = 8,message = "La contraseña debe tener minimo ocho caracteres")
    private String password;
    @Column(nullable = false,length = 20)
    private String nombre;
    @Column(nullable = false,length = 50)
    private String apellidos;
    @Column(nullable = false)
    private String email;
    @Column(nullable = false)
    private Timestamp fecha_nacimiento;
    @CreationTimestamp
    private Timestamp fecha_alta;

    @OneToOne
    @JoinColumn(name = "suscripcion")
    private Suscripcion suscripcion;

    @OneToMany(mappedBy = "usuario")
    private List<Tarea> tareas;
    
    public Usuario() {
    }


    public Usuario(String usuario,
            @Size(min = 8, message = "La contraseña debe tener minimo ocho caracteres") String password, String nombre,
            String apellidos, String email, Timestamp fecha_nacimiento, Timestamp fecha_alta, Suscripcion suscripcion) {
        this.usuario = usuario;
        this.password = password;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.email = email;
        this.fecha_nacimiento = fecha_nacimiento;
        this.fecha_alta = fecha_alta;
        this.suscripcion = suscripcion;
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

    public Timestamp getFecha_nacimiento() {
        return fecha_nacimiento;
    }

    public void setFecha_nacimiento(Timestamp fecha_nacimiento) {
        this.fecha_nacimiento = fecha_nacimiento;
    }

    public Timestamp getFecha_alta() {
        return fecha_alta;
    }

    public void setFecha_alta(Timestamp fecha_alta) {
        this.fecha_alta = fecha_alta;
    }


    

    

    
}
