package com.Reclamos.SistemaDeReclamos.DTO;

public class Admin extends Usuarios {

    private String cargo;

    public Admin(int rut, String nombre, String apellido,
                 int telefono, String correo, String direccion,
                 String contraseña, String permiso, String cargo){

        super(rut, nombre, apellido, telefono, correo, contraseña, direccion, contraseña, permiso);
        this.cargo = cargo;
    }

    public String getCargo() {
        return cargo;
    }

    public void setCargo(String cargo) {
        this.cargo = cargo;
    }
}
