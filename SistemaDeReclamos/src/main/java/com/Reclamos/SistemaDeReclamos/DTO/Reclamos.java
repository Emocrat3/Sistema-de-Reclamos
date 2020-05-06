package com.Reclamos.SistemaDeReclamos.DTO;

public class Reclamos {
    private int num_reclamo;
    private int rut_usuario;
    private String tipo_problema;
    private String fecha;
    private String texto_reclamo;
    private String estado;
    private int SLA_reclamo;
    private String fecha_tope;

    public Reclamos(int num_reclamo, int rut_usuario, String tipo_problema, String fecha, String texto_reclamo, String estado, int SLA_reclamo, String fecha_tope) {
        this.num_reclamo = num_reclamo;
        this.rut_usuario = rut_usuario;
        this.tipo_problema = tipo_problema;
        this.fecha = fecha;
        this.texto_reclamo = texto_reclamo;
        this.estado = estado;
        this.SLA_reclamo = SLA_reclamo;
        this.fecha_tope = fecha_tope;
    }

    public int getNum_reclamo() {
        return num_reclamo;
    }

    public void setNum_reclamo(int num_reclamo) {
        this.num_reclamo = num_reclamo;
    }

    public int getRut_usuario() {
        return rut_usuario;
    }

    public void setRut_usuario(int rut) {
        this.rut_usuario = rut_usuario;
    }

    public String getTipo_problema() {
        return tipo_problema;
    }

    public void setTipo_problema(String tipo_problema) {
        this.tipo_problema = tipo_problema;
    }

    public  String getFecha() {
        return fecha;
    }

    public void setFecha(String fecha) {
        this.fecha = fecha;
    }

    public String getTexto_reclamo() {
        return texto_reclamo;
    }

    public void setTexto_reclamo(String texto_reclamo) {
        this.texto_reclamo = texto_reclamo;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public int getSLA_reclamo() {
        return SLA_reclamo;
    }

    public void setSLA_reclamo(int SLA_reclamo) {
        this.SLA_reclamo = SLA_reclamo;
    }

    public String getFecha_tope() {
        return fecha_tope;
    }

    public void setFecha_tope(String fecha_tope) {
        this.fecha_tope = fecha_tope;
    }
}