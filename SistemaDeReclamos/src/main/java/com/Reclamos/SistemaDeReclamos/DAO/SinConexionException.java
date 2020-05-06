package com.Reclamos.SistemaDeReclamos.DAO;

        import java.sql.SQLException;

public class SinConexionException extends Exception {
    public SinConexionException(SQLException e) {
        super (e);
    }
}
