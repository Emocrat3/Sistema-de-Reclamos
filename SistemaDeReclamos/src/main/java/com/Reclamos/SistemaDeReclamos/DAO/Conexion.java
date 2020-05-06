package com.Reclamos.SistemaDeReclamos.DAO;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Conexion {

    private static Connection conn = null;
    static final private String URL = "jdbc:sqlserver://localhost:1433; databasename=SistemaReclamos; user=sa;password=12345";


    static public Connection obtenerConexion() throws SinConexionException {
        if (conn == null) {
            try{
                conn = DriverManager.getConnection(URL);
            } catch (SQLException e){
                throw new SinConexionException(e);
            }
        }
        return conn;
    }

    public static void cerrarConexion(){
        if (conn != null){
            try{
                conn.close();
            } catch (SQLException e){
                e.printStackTrace();
            }
            conn = null;
        }
    }
}