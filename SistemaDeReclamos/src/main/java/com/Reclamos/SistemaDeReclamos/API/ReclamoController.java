package com.Reclamos.SistemaDeReclamos.API;

import com.Reclamos.SistemaDeReclamos.DAO.ReclamosDAO;
import com.Reclamos.SistemaDeReclamos.DAO.RespuestaDAO;
import com.Reclamos.SistemaDeReclamos.DAO.SLADAO;
import com.Reclamos.SistemaDeReclamos.DAO.SinConexionException;
import com.Reclamos.SistemaDeReclamos.DTO.Reclamos;
import com.Reclamos.SistemaDeReclamos.DTO.Respuesta;
import com.Reclamos.SistemaDeReclamos.Servicios.Fecha;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin (origins = "http://localhost:4200")
public class ReclamoController {

    @RequestMapping(method = RequestMethod.POST, value = "/insertarReclamo/Usuario")
    public void insertarReclamo(@RequestBody Reclamos reclamos) throws Exception {
        int sla = SLADAO.setSLA(reclamos);
        reclamos.setSLA_reclamo(sla);
        Fecha fecha = new Fecha();
        String fechaTope = fecha.obtenerFechaTope(reclamos);
        reclamos.setFecha_tope(fechaTope);
        ReclamosDAO.insertarReclamo(reclamos);
    }
    @RequestMapping(method = RequestMethod.GET,  value = "/reclamos/usuario")
    public List<Reclamos> obtenerReclamos() throws Exception {
        return ReclamosDAO.obtenerReclamos();
    }

    @RequestMapping(method = RequestMethod.GET, value = "/reclamos/usuario/{num_reclamo}")
    public Reclamos obtenerReclamosPorID(@PathVariable("num_reclamo") int num_reclamo){
        return ReclamosDAO.obtenerReclamosPorID(num_reclamo);
    }
    @RequestMapping(method = RequestMethod.PUT, value = "/editarReclamo/")
    public Reclamos editarReclamos(@RequestBody Reclamos reclamos) throws SinConexionException, SQLException {
        return ReclamosDAO.editarReclamoPorID(reclamos);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/ADMIN/pendientes/respuesta")
    public void insertarRespuesta(@RequestBody Respuesta respuesta) throws Exception{
        Fecha fecha = new Fecha();
        String slarespuesta = fecha.compararFechas(respuesta);
        respuesta.setSLA_respuesta(slarespuesta);
        RespuestaDAO.insertarRespuesta(respuesta);
    }

    @RequestMapping(method = RequestMethod.GET,  value = "/ADMIN/pendientes/")
    public List<Reclamos> obtenerReclamosAdmin() throws Exception {
        return ReclamosDAO.obtenerReclamosAdmin();
    }

    @RequestMapping(method = RequestMethod.GET, value = "/filtrarReclamoPorID/admin/{num_reclamo}")
    public Reclamos obtenerReclamoPorIDAdmin(@PathVariable("num_reclamo") int num_reclamo){
        return ReclamosDAO.obtenerReclamosPorIDAdmin(num_reclamo);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/filtrarReclamoPorRutUsuario/admin/{rut_usuario}")
    public List<Reclamos> obtenerReclamoPorRutUsuarioADMIN(@PathVariable("rut_usuario") int rut_usuario) throws SinConexionException, SQLException {
        return ReclamosDAO.obtenerReclamosPorRutUsuarioADMIN(rut_usuario);
    }
}
