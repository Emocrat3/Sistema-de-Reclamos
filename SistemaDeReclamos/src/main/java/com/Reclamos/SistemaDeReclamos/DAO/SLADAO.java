package com.Reclamos.SistemaDeReclamos.DAO;

import com.Reclamos.SistemaDeReclamos.DTO.Reclamos;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class SLADAO {
    static private Connection conn = null;

    static public int setSLA(Reclamos reclamos) throws SinConexionException, SQLException {
        if (conn == null){
            conn = Conexion.obtenerConexion();
        }
        String tipoProblema = reclamos.getTipo_problema();
        String query = "select SLA_NumeroDias from SLA where tipo_reclamo = '" + tipoProblema+"'";
        PreparedStatement ps = conn.prepareStatement(query);
        ResultSet rs = ps.executeQuery();
        int SLA_NumeroDias = 0;
        while (rs.next()) {
            SLA_NumeroDias = rs.getInt("SLA_NumeroDias");
        }
        return SLA_NumeroDias;
    }
}