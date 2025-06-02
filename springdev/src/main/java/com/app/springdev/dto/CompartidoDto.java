package com.app.springdev.dto;

public class CompartidoDto {

    private Long tarea_id;
    private String usuario;
    
    
    public CompartidoDto() {
    }


    public CompartidoDto(Long tarea_id, String usuario) {
        this.tarea_id = tarea_id;
        this.usuario = usuario;
    }


    public Long getTarea_id() {
        return tarea_id;
    }


    public void setTarea_id(Long tarea_id) {
        this.tarea_id = tarea_id;
    }


    public String getUsuario() {
        return usuario;
    }


    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }

    

    
}
