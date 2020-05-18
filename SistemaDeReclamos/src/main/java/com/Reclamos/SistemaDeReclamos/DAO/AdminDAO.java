package com.Reclamos.SistemaDeReclamos.DAO;

import com.Reclamos.SistemaDeReclamos.DTO.Admin;
import com.Reclamos.SistemaDeReclamos.DTO.Usuarios;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class AdminDAO {
    static private Connection conn = null;

    public static Admin editarCuentaAdmin(Admin admin) throws SinConexionException, SQLException {
        try {
            Connection conn = Conexion.obtenerConexion();
            PreparedStatement ps = conn.prepareStatement("update Usuario set telefono = ?, correo = ?, direccion = ?, cargo = ? where rut = ?");
            ps.setInt(1, admin.getTelefono());
            ps.setString(2, admin.getCorreo());
            ps.setString(3, admin.getDireccion());
            ps.setString(4, admin.getCargo());
            ps.setInt(5, admin.getRut());
            ps.executeUpdate();
        } catch (SQLException | SinConexionException e) {
            e.printStackTrace();
            return null;
        }
        return admin;
    }

    static public int registrarAdmin(Admin admin) throws SinConexionException, SQLException {
        if (conn == null) {
            conn = Conexion.obtenerConexion();
        }
        String permiso= "Ejecutivo";
        String insert = "insert into Usuario(rut, nombre, apellido, telefono, correo, direccion, contraseña, cargo, permiso ) values (?,?,?,?,?,?,?,?,?)";
        PreparedStatement ps = conn.prepareStatement(insert);
        ps.setInt(1, admin.getRut());
        ps.setString(2, admin.getNombre());
        ps.setString(3, admin.getApellido());
        ps.setInt(4, admin.getTelefono());
        ps.setString(5, admin.getCorreo());
        ps.setString(6, admin.getDireccion());
        ps.setString(7, admin.getContraseña());
        ps.setString(8, admin.getCargo());
        ps.setString(9, permiso);
        int resultado = ps.executeUpdate();
        return resultado;
    }

    static public Admin obtenerAdminPorID(int rut) {
        try {
            Connection conn = Conexion.obtenerConexion();
            PreparedStatement ps = conn.prepareStatement("Select * from Usuario where rut = " + rut);
            ResultSet rs = ps.executeQuery();
            rs.next();
            int numRut = rs.getInt("rut");
            String nombreU = rs.getString("nombre");
            String apellidoU = rs.getString("apellido");
            int numTelefono = rs.getInt("telefono");
            String correoElectronico = rs.getString("correo");
            String direccionU = rs.getString("direccion");
            String contraseñaU = rs.getString("contraseña");
            String permisoU = rs.getString("permiso");
            String cargoU = rs.getString("cargo");
            return new Admin(numRut,nombreU,apellidoU,numTelefono,correoElectronico,direccionU, contraseñaU,permisoU,cargoU);
        } catch (SQLException | SinConexionException e) {
            e.printStackTrace();
            return null;
        }
    }

    static public Admin editarContraseñaAdmin(Admin admin) throws SinConexionException, SQLException {
        try {
            Connection conn = Conexion.obtenerConexion();
            PreparedStatement ps = conn.prepareStatement("update Usuario set contraseña = ? where rut = ?");
            ps.setString(1, admin.getContraseña());
            ps.setInt(2, admin.getRut());

            ps.executeUpdate();
        } catch (SQLException | SinConexionException e) {
            e.printStackTrace();
            return null;
        }
        return admin;
    }

    static public void setRutReclamosVacio(int rut) throws SQLException{
        try{
            Connection conn = Conexion.obtenerConexion();
            PreparedStatement ps = conn.prepareStatement("update Reclamos set rut_usuario = 9999 where rut_usuario = " + rut);
            ps.executeUpdate();
        } catch (SQLException | SinConexionException e) {
            e.printStackTrace();
        }
    }
    static public void setRutRespuestaVacio(int rut) throws SQLException{
        try{
            Connection conn = Conexion.obtenerConexion();
            PreparedStatement ps = conn.prepareStatement("update Respuesta set rut_admin = 9999  where rut_admin = " + rut);
            ps.executeUpdate();
        } catch (SQLException | SinConexionException e) {
            e.printStackTrace();
        }
    }
    static public void darBajaAdmin(int rut) throws SinConexionException, SQLException {
        try {
            Connection conn = Conexion.obtenerConexion();
            PreparedStatement ps = conn.prepareStatement("delete from Usuario where rut = " + rut);
            ps.executeUpdate();
        } catch (SQLException | SinConexionException e) {
            e.printStackTrace();
        }
    }

    static public Admin loginAdmin(Usuarios a) throws SinConexionException, SQLException {
        try {
            Connection conn = Conexion.obtenerConexion();
            PreparedStatement ps = conn.prepareStatement("select * from Usuario where correo = '" + a.getCorreo() + "' and contraseña = '" + a.getContraseña() + "' and permiso ='" + a.getPermiso() + "' ");
            ResultSet rs = ps.executeQuery();
                rs.next();
                int numRut = rs.getInt("rut");
                String nombreU = rs.getString("nombre");
                String apellidoU = rs.getString("apellido");
                int numTelefono = rs.getInt("telefono");
                String correoElectronico = rs.getString("correo");
                String direccionU = rs.getString("direccion");
                String contraseñaU = rs.getString("contraseña");
                String productoU = rs.getString("producto");
                String permisoU = rs.getString("permiso");
                return new Admin(numRut,nombreU,apellidoU,numTelefono,correoElectronico,direccionU, contraseñaU, permisoU,productoU);
        } catch (SQLException | SinConexionException e) {
            e.printStackTrace();
            return null;
        }
    }
}

