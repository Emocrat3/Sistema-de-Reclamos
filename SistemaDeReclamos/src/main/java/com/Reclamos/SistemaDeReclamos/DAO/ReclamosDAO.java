package com.Reclamos.SistemaDeReclamos.DAO;

import com.Reclamos.SistemaDeReclamos.DTO.Reclamos;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class ReclamosDAO {

    static private Connection conn = null;

    static public int insertarReclamo(Reclamos reclamos) throws Exception, SQLException {
        if (conn == null) {
            conn = Conexion.obtenerConexion();
        }
        String estadoReclamo = "PENDIENTE";
        String insert = "insert into Reclamos(tipo_problema, texto_reclamo, fecha, rut_usuario, estado, SLA_reclamo, fecha_tope) values (?,?,?,?,?,?,?)";
        PreparedStatement ps = conn.prepareStatement(insert);

        ps.setString(1, reclamos.getTipo_problema());
        ps.setString(2, reclamos.getTexto_reclamo());
        ps.setInt(4, reclamos.getRut_usuario());
        ps.setString(3, reclamos.getFecha());
        ps.setString(5, estadoReclamo);
        ps.setInt(6, reclamos.getSLA_reclamo());
        ps.setString(7, reclamos.getFecha_tope());
        int resultado = ps.executeUpdate();
        return resultado;
    }

    public static int obtenerID(Reclamos r) throws SQLException{
        try {
            Connection conn = Conexion.obtenerConexion();
            PreparedStatement ps = conn.prepareStatement("select top 1 * from Reclamos where rut_usuario = "+r.getRut_usuario()+" order by num_reclamo desc");
            ResultSet rs = ps.executeQuery();
            rs.next();
            int numReclamo = rs.getInt("num_reclamo");
            return numReclamo;
        }catch (SQLException | SinConexionException e){
            e.printStackTrace();
        }
        return 0;
    }

    static public List<Reclamos> obtenerReclamos() throws Exception, SQLException {
        try {
            Connection conn = Conexion.obtenerConexion();
            List<Reclamos> resultado = new ArrayList<>();
            String query = "select  rut_usuario, num_reclamo, tipo_problema, texto_reclamo, fecha, estado, SLA_reclamo, fecha_tope from Reclamos";
            PreparedStatement ps = conn.prepareStatement(query);
            ResultSet rs = ps.executeQuery();
            while (rs.next()) {
                String tipoProblema = rs.getString("tipo_problema");
                String textoReclamo = rs.getString("texto_reclamo");
                int numReclamo = rs.getInt("num_reclamo");
                int rutU = rs.getInt("rut_usuario");
                String fechaReclamo = rs.getString("fecha");
                String estadoReclamo = rs.getString("estado");
                int SLA_reclamo = rs.getInt("SLA_reclamo");
                String fechaTopeReclamo = rs.getString("fecha_tope");
                Reclamos r = new Reclamos(numReclamo, rutU, tipoProblema, fechaReclamo, textoReclamo, estadoReclamo, SLA_reclamo, fechaTopeReclamo);
                resultado.add(r);
            }
            return resultado;
        } catch (SQLException e) {
            return null;
        }
    }



    static public List<Reclamos> obtenerReclamosAdminFiltro(String tipo) throws SQLException, SinConexionException {
        if (conn == null){
            conn = Conexion.obtenerConexion();
        }
        List<Reclamos> reclamosArrayList = new ArrayList<>();
        String query = "select num_reclamo, rut_usuario, tipo_problema, fecha, texto_reclamo, estado, SLA_reclamo, fecha_tope from Reclamos where estado = 'PENDIENTE', '"+tipo+"' order by fecha_tope";
        PreparedStatement ps = conn.prepareStatement(query);
        ResultSet rs = ps.executeQuery();
        while (rs.next()){
            int num_reclamo = rs.getInt("num_reclamo");
            int rut = rs.getInt("rut_usuario");
            String tipo_problema = rs.getString("tipo_problema");
            String fecha = rs.getString("fecha");
            String texto_reclamo = rs.getString("texto_reclamo");
            String estado = rs.getString("estado");
            int SLA_reclamo = rs.getInt("SLA_reclamo");
            String fecha_tope = rs.getString("fecha_tope");
            Reclamos r = new Reclamos(num_reclamo, rut, tipo_problema, fecha, texto_reclamo, estado, SLA_reclamo, fecha_tope);
            reclamosArrayList.add(r);
        }
        return reclamosArrayList;
    }

    static public List<Reclamos> obtenerReclamosAdmin() throws SinConexionException, SQLException {
        if (conn == null){
            conn = Conexion.obtenerConexion();
        }
        List<Reclamos> reclamosArrayList = new ArrayList<>();
        String query = "select num_reclamo, rut_usuario, tipo_problema, fecha, texto_reclamo, estado, SLA_reclamo, fecha_tope from Reclamos where estado = 'PENDIENTE' order by fecha_tope";
        PreparedStatement ps = conn.prepareStatement(query);
        ResultSet rs = ps.executeQuery();
        while (rs.next()){
            int num_reclamo = rs.getInt("num_reclamo");
            int rut = rs.getInt("rut_usuario");
            String tipo_problema = rs.getString("tipo_problema");
            String fecha = rs.getString("fecha");
            String texto_reclamo = rs.getString("texto_reclamo");
            String estado = rs.getString("estado");
            int SLA_reclamo = rs.getInt("SLA_reclamo");
            String fecha_tope = rs.getString("fecha_tope");
            Reclamos r = new Reclamos(num_reclamo, rut, tipo_problema, fecha, texto_reclamo, estado, SLA_reclamo, fecha_tope);
            reclamosArrayList.add(r);
        }
        return reclamosArrayList;
    }

    static public Reclamos obtenerReclamosPorIDAdmin(int num_reclamo) {
        try {
            Connection conn = Conexion.obtenerConexion();
            PreparedStatement ps = conn.prepareStatement("select tipo_problema, texto_reclamo, num_reclamo, rut_usuario, fecha, estado, SLA_reclamo, fecha_tope from Reclamos where num_reclamo = ?");
            ps.setInt(1, num_reclamo);
            ResultSet rs = ps.executeQuery();
            rs.next();
            int rutU = rs.getInt("rut_usuario");
            int numReclamo = rs.getInt("num_reclamo");
            String tipoProblema = rs.getString("tipo_problema");
            String textoReclamo = rs.getString("texto_reclamo");
            String fechaReclamo = rs.getString("fecha");
            String estadoReclamo = rs.getString("estado");
            int SLA_reclamo = rs.getInt("SLA_reclamo");
            String fechaTopeReclamo = rs.getString("fecha_tope");
            return new Reclamos(numReclamo, rutU, tipoProblema, fechaReclamo,textoReclamo,  estadoReclamo, SLA_reclamo,fechaTopeReclamo);
        } catch (SQLException | SinConexionException e) {
            e.printStackTrace();
            return null;
        }
    }

    static public List<Reclamos> obtenerReclamosPorRut(int rut_usuario) throws SinConexionException, SQLException {
        if (conn == null){
            conn = Conexion.obtenerConexion();
        }
        List<Reclamos> reclamosArrayList = new ArrayList<>();
        String query = ("select tipo_problema, texto_reclamo, num_reclamo, rut_usuario, fecha, estado, SLA_reclamo, fecha_tope from Reclamos where rut_usuario = ?");
        PreparedStatement ps = conn.prepareStatement(query);
        ps.setInt(1, rut_usuario);
        ResultSet rs = ps.executeQuery();
        while(rs.next()){
            int rutU = rs.getInt("rut_usuario");
            int numReclamo = rs.getInt("num_reclamo");
            String tipoProblema = rs.getString("tipo_problema");
            String textoReclamo = rs.getString("texto_reclamo");
            String fechaReclamo = rs.getString("fecha");
            String estadoReclamo = rs.getString("estado");
            int SLA_reclamo = rs.getInt("SLA_reclamo");
            String fechaTopeReclamo = rs.getString("fecha_tope");
            Reclamos r = new Reclamos(numReclamo, rutU, tipoProblema, fechaReclamo, textoReclamo,  estadoReclamo, SLA_reclamo,fechaTopeReclamo);
            reclamosArrayList.add(r);
        }
        return reclamosArrayList;

    }

    static public List<Reclamos> obtenerReclamosPorRutUsuarioADMIN(int rut_usuario) throws SinConexionException, SQLException {
        if (conn == null){
            conn = Conexion.obtenerConexion();
        }
            List<Reclamos> reclamosArrayList = new ArrayList<>();
            String query = ("select tipo_problema, texto_reclamo, num_reclamo, rut_usuario, fecha, estado, SLA_reclamo, fecha_tope from Reclamos where rut_usuario = ?");
            PreparedStatement ps = conn.prepareStatement(query);
            ps.setInt(1, rut_usuario);
            ResultSet rs = ps.executeQuery();
            while(rs.next()){
            int rutU = rs.getInt("rut_usuario");
            int numReclamo = rs.getInt("num_reclamo");
            String tipoProblema = rs.getString("tipo_problema");
            String textoReclamo = rs.getString("texto_reclamo");
            String fechaReclamo = rs.getString("fecha");
            String estadoReclamo = rs.getString("estado");
            int SLA_reclamo = rs.getInt("SLA_reclamo");
            String fechaTopeReclamo = rs.getString("fecha_tope");
            Reclamos r = new Reclamos(numReclamo, rutU, tipoProblema, fechaReclamo, textoReclamo,  estadoReclamo, SLA_reclamo,fechaTopeReclamo);
            reclamosArrayList.add(r);
            }
            return reclamosArrayList;

        }

    static public Reclamos obtenerReclamosPorID(int num_reclamo) {
        try {
            Connection conn = Conexion.obtenerConexion();
            PreparedStatement ps = conn.prepareStatement("select tipo_problema, texto_reclamo, num_reclamo, rut_usuario, fecha, estado, SLA_reclamo, fecha_tope from Reclamos where num_reclamo = ?");
            ps.setInt(1, num_reclamo);
            ResultSet rs = ps.executeQuery();
            rs.next();
            int rutU = rs.getInt("rut_usuario");
            int numReclamo = rs.getInt("num_reclamo");
            String tipoProblema = rs.getString("tipo_problema");
            String textoReclamo = rs.getString("texto_reclamo");
            String fechaReclamo = rs.getString("fecha");
            String estadoReclamo = rs.getString("estado");
            int SLA_reclamo = rs.getInt("SLA_reclamo");
            String fechaTopeReclamo = rs.getString("fecha_tope");
            return new Reclamos(numReclamo, rutU,tipoProblema, fechaReclamo, textoReclamo,  estadoReclamo, SLA_reclamo,fechaTopeReclamo);
        } catch (SQLException | SinConexionException e) {
            e.printStackTrace();
            return null;
        }
    }

    static public Reclamos editarReclamoPorID(Reclamos r) throws SinConexionException, SQLException {
        try {
            Connection conn = Conexion.obtenerConexion();
            PreparedStatement ps = conn.prepareStatement("update Reclamos set texto_reclamo = ?, tipo_problema = ?, fecha = ? where num_reclamo = ?");
            ps.setString(1, r.getTexto_reclamo());
            ps.setString(2, r.getTipo_problema());
            ps.setString(3, r.getFecha());
            ps.setInt(4, r.getNum_reclamo());
            ps.executeUpdate();
        } catch (SQLException | SinConexionException e) {
            e.printStackTrace();
            return null;
        }
        return r;
    }
}
