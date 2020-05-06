package com.Reclamos.SistemaDeReclamos.DAO;

import com.Reclamos.SistemaDeReclamos.DTO.Respuesta;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class RespuestaDAO {

    static public int insertarRespuesta(Respuesta respuesta) throws Exception, SQLException {
        Connection conn = Conexion.obtenerConexion();
        String estadoReclamo = "RESPONDIDO";
        String insert = "insert into Respuesta(num_reclamo, rut_admin, texto_respuesta, fecha_respuesta, SLA_respuesta) values (?,?,?,?,?)";
        PreparedStatement ps = conn.prepareStatement(insert);

        ps.setLong(1, respuesta.getNum_reclamo());
        ps.setLong(2, respuesta.getRut_admin());
        ps.setString(3, respuesta.getTexto_respuesta());
        ps.setString(4, respuesta.getFecha_respuesta());
        ps.setString(5, respuesta.getSLA_respuesta());
        int resultado = ps.executeUpdate();
        return resultado;
    }

}
