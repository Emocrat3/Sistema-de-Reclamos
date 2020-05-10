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

    static public Usuarios editarCuentaUsuario(Usuarios u) throws SinConexionException, SQLException {
        try {
            Connection conn = Conexion.obtenerConexion();
            PreparedStatement ps = conn.prepareStatement("update Usuario set telefono = ?, correo = ?, direccion = ?, contraseña = ?, producto = ? where rut = ?");
            ps.setInt(1, u.getTelefono());
            ps.setString(2, u.getCorreo());
            ps.setString(3, u.getDireccion());
            ps.setString(4, u.getContraseña());
            ps.setString(5, u.getProducto());
            ps.setInt(6, u.getRut());
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

    static public Usuarios darBajaUsuario(Usuarios u) throws SinConexionException, SQLException {
        try {
            Connection conn = Conexion.obtenerConexion();
            PreparedStatement ps = conn.prepareStatement("delete from Usuario where rut = ?");
            ps.setInt(1, u.getRut());
            ps.executeUpdate();
        } catch (SQLException | SinConexionException e) {
            e.printStackTrace();
            return null;
        }
        return u;
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


