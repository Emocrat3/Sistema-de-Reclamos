package com.Reclamos.SistemaDeReclamos.DAO;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class extraerFechaTopeDAO {
    static private Connection conn = null;

    static public String extrarFechaTope(Long num_reclamo) throws SinConexionException, SQLException {
        if (conn == null) {
            conn = Conexion.obtenerConexion();
        }
        String query = "select fecha_tope from Reclamos where num_reclamo = '" + num_reclamo + "'";
        PreparedStatement ps = conn.prepareStatement(query);
        ResultSet rs = ps.executeQuery();
        String fechaTope = null;
        while (rs.next()) {
            fechaTope = rs.getString("fecha_tope");
        }
        return fechaTope;

    }
}