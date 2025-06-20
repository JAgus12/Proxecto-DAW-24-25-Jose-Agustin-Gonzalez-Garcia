package com.app.springdev.model;

import org.hibernate.annotations.CreationTimestamp;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Size;
import java.sql.Timestamp;
import java.time.LocalDate;
import java.util.Collection;
import java.util.List;


@Entity
@Table(name = "usuarios")
public class Usuario implements UserDetails {

    @Id
    private String usuario;
    @Column(nullable = false)
    @Size(min = 8,message = "La contraseña debe tener minimo ocho caracteres")
    @JsonIgnore
    private String password;
    @Column(nullable = false,length = 20)
    private String nombre;
    @Column(nullable = false,length = 50)
    private String apellidos;
    @Column(nullable = false)
    private String email;
    @Column(nullable = false)
    private LocalDate fecha_nacimiento;
    @CreationTimestamp
    private Timestamp fecha_alta;
    @Enumerated(EnumType.STRING)
    private Rol rol;

    @OneToOne
    @JoinColumn(name = "suscripcion")
    private Suscripcion suscripcion;

    @OneToMany(mappedBy = "usuario")
    @JsonManagedReference
    private List<Tarea> tareas;

    @ManyToMany
    @JoinTable(
        name = "tareas_compartidas",
        joinColumns = @JoinColumn(name = "usuario"),
        inverseJoinColumns = @JoinColumn(name = "tarea_id")
    )
    private List<Tarea> tareasCompartidas;
    
    public Usuario() {
    }


    public Usuario(String usuario,
            @Size(min = 8, message = "La contraseña debe tener minimo ocho caracteres") String password, String nombre,
            String apellidos, String email, LocalDate fecha_nacimiento, Timestamp fecha_alta, Rol rol,
            Suscripcion suscripcion, List<Tarea> tareas, List<Tarea> tareasCompartidas) {
        this.usuario = usuario;
        this.password = password;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.email = email;
        this.fecha_nacimiento = fecha_nacimiento;
        this.fecha_alta = fecha_alta;
        this.rol = rol;
        this.suscripcion = suscripcion;
        this.tareas = tareas;
        this.tareasCompartidas = tareasCompartidas;
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

    public Timestamp getFecha_alta() {
        return fecha_alta;
    }

    public void setFecha_alta(Timestamp fecha_alta) {
        this.fecha_alta = fecha_alta;
    }

    

    public Suscripcion getSuscripcion() {
        return suscripcion;
    }


    public void setSuscripcion(Suscripcion suscripcion) {
        this.suscripcion = suscripcion;
    }


    public List<Tarea> getTareas() {
        return tareas;
    }


    public void setTareas(List<Tarea> tareas) {
        this.tareas = tareas;
    }


    public List<Tarea> getTareasCompartidas() {
        return tareasCompartidas;
    }


    public void setTareasCompartidas(List<Tarea> tareasCompartidas) {
        this.tareasCompartidas = tareasCompartidas;
    }

      public Rol getRol() {
        return rol;
    }


    public void setRol(Rol rol) {
        this.rol = rol;
    }


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority("ROLE_"+rol.name()));
    }


    @Override
    public String getUsername() {
        return this.usuario;
    }


  


    

    

    

    
}
