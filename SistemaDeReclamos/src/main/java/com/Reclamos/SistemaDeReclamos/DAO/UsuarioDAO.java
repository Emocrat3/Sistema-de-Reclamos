package com.Reclamos.SistemaDeReclamos.DAO;

import com.Reclamos.SistemaDeReclamos.DTO.Usuarios;


import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class UsuarioDAO {
    static private Connection conn = null;

    static public int registrarUsuario(Usuarios usuarios) throws SinConexionException, SQLException {
        if (conn == null) {
            conn = Conexion.obtenerConexion();
        }
        String permiso = "NINGUNO";
        String insert = "insert into Usuario(rut, nombre, apellido, telefono, correo, direccion, contraseña, producto, permiso) values (?,?,?,?,?,?,?,?,?)";
        PreparedStatement ps = conn.prepareStatement(insert);
        ps.setInt(1, usuarios.getRut());
        ps.setString(2, usuarios.getNombre());
        ps.setString(3, usuarios.getApellido());
        ps.setInt(4, usuarios.getTelefono());
        ps.setString(5, usuarios.getCorreo());
        ps.setString(6, usuarios.getDireccion());
        ps.setString(7, usuarios.getContraseña());
        ps.setString(8, usuarios.getProducto());
        ps.setString(9, permiso);
        int resultado = ps.executeUpdate();
        return resultado;
    }

    static public Usuarios obtenerUsuariosPorID(int rut) {
        try {
            Connection conn = Conexion.obtenerConexion();
            PreparedStatement ps = conn.prepareStatement("Select * from Usuario where rut = " + rut);
            ResultSet rs = ps.executeQuery();
            rs.next();
            int numRut = rs.getInt(1);
            String nombreU = rs.getString(2);
            String apellidoU = rs.getString(3);
            int numTelefono = rs.getInt(4);
            String correoElectronico = rs.getString(5);
            String direccionU = rs.getString(6);
            String contraseñaU = rs.getString(7);
            String productoU = rs.getString(8);
            String permisoU = rs.getString(9);
            return new Usuarios(numRut,nombreU,apellidoU,numTelefono,correoElectronico,direccionU, contraseñaU,productoU,permisoU);
        } catch (SQLException | SinConexionException e) {
            e.printStackTrace();
            return null;
        }
    }

    static public Usuarios editarCuentaUsuario(Usuarios u) throws SinConexionException, SQLException {
        try {
            Connection conn = Conexion.obtenerConexion();
            PreparedStatement ps = conn.prepareStatement("update Usuario set telefono = ?, correo = ?, direccion = ?, producto = ? where rut = ?");
            ps.setInt(1, u.getTelefono());
            ps.setString(2, u.getCorreo());
            ps.setString(3, u.getDireccion());
            ps.setString(4, u.getProducto());
            ps.setInt(5, u.getRut());
            ps.executeUpdate();
        } catch (SQLException | SinConexionException e) {
            e.printStackTrace();
            return null;
        }
        return u;
    }

    static public Usuarios editarContraseñaUsuario(Usuarios u) throws SinConexionException, SQLException {
        try {
            Connection conn = Conexion.obtenerConexion();
            PreparedStatement ps = conn.prepareStatement("update Usuario set contraseña = ? where rut = ?");
            ps.setString(1, u.getContraseña());
            ps.setInt(2, u.getRut());
            ps.executeUpdate();
        } catch (SQLException | SinConexionException e) {
            e.printStackTrace();
            return null;
        }
        return u;
    }

    static public String obtenerCorreoPorRut(int rut) throws SQLException{
        try {
            Connection conn = Conexion.obtenerConexion();
            PreparedStatement ps = conn.prepareStatement("select correo from Usuario where rut = "+rut);
            ResultSet rs = ps.executeQuery();
            rs.next();
            String correo = rs.getString("correo");
            return correo;
        } catch (SQLException | SinConexionException e){
            e.printStackTrace();
        }
        return null;
    }

    static public void setRutReclamosVacio(int rut) throws SQLException{
        try{
            Connection conn = Conexion.obtenerConexion();
            PreparedStatement ps = conn.prepareStatement("update Reclamos set rut_usuario = 0 where rut_usuario = " + rut);
            ps.executeUpdate();
        } catch (SQLException | SinConexionException e) {
            e.printStackTrace();
        }
    }
    static public void setRutRespuestaVacio(int rut) throws SQLException{
        try{
            Connection conn = Conexion.obtenerConexion();
            PreparedStatement ps = conn.prepareStatement("update Respuesta set rut_admin = 0  where rut_admin = " + rut);
            ps.executeUpdate();
        } catch (SQLException | SinConexionException e) {
            e.printStackTrace();
        }
    }
    public static String obtenerNombreByRut(int rut){
        try {
            Connection conn = Conexion.obtenerConexion();
            PreparedStatement ps = conn.prepareStatement("select nombre from Usuario where  rut = "+rut);
            ResultSet rs = ps.executeQuery();
            rs.next();
            String nombre = rs.getString("nombre");
            return nombre;
        } catch (SQLException | SinConexionException e){
            e.printStackTrace();
        }
        return null;
    }
    static public void darBajaUsuario(int rut) throws SQLException {
        try {
            Connection conn = Conexion.obtenerConexion();
            PreparedStatement ps = conn.prepareStatement("delete from Usuario where rut = " + rut);
            ps.executeUpdate();
        } catch (SQLException | SinConexionException e) {
            e.printStackTrace();
        }
    }

    static public Usuarios loginUsuario(Usuarios u) {
        try {
            Connection conn = Conexion.obtenerConexion();
            PreparedStatement ps = conn.prepareStatement("select * from Usuario where correo = '" + u.getCorreo() + "' and contraseña = '" + u.getContraseña() + "'");
            ResultSet rs = ps.executeQuery();
                rs.next();
                int numRut = rs.getInt(1);
                String nombreU = rs.getString(2);
                String apellidoU = rs.getString(3);
                int numTelefono = rs.getInt(4);
                String correoElectronico = rs.getString(5);
                String direccionU = rs.getString(6);
                String contraseñaU = rs.getString(7);
                String productoU = rs.getString(8);
                String permisoU = rs.getString(9);
                return new Usuarios(numRut,nombreU,apellidoU,numTelefono,correoElectronico,direccionU, contraseñaU,productoU,permisoU);

        } catch (SQLException | SinConexionException e) {
            e.printStackTrace();
        }
        return null;
    }
}


