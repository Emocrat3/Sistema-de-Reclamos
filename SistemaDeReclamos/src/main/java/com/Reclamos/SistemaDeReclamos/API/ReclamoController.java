package com.Reclamos.SistemaDeReclamos.API;

import com.Reclamos.SistemaDeReclamos.DAO.*;
import com.Reclamos.SistemaDeReclamos.DTO.Reclamos;
import com.Reclamos.SistemaDeReclamos.DTO.Respuesta;
import com.Reclamos.SistemaDeReclamos.DTO.Usuarios;
import com.Reclamos.SistemaDeReclamos.Servicios.Fecha;
import com.Reclamos.SistemaDeReclamos.Servicios.SendMailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin (origins = "http://localhost:4200")
public class ReclamoController {
    @Autowired
    private SendMailService sendMailService;

    @RequestMapping(method = RequestMethod.POST, value = "/insertarReclamo/Usuario")
    public void insertarReclamo(@RequestBody Reclamos reclamos) throws Exception {
        int sla = SLADAO.setSLA(reclamos);
        reclamos.setSLA_reclamo(sla);
        Fecha fecha = new Fecha();
        String fechaTope = fecha.obtenerFechaTope(reclamos);
        reclamos.setFecha_tope(fechaTope);
        ReclamosDAO.insertarReclamo(reclamos);

        int numRecl = ReclamosDAO.obtenerID(reclamos);
        String correoUser = UsuarioDAO.obtenerCorreoPorRut(reclamos.getRut_usuario());
        String body = "El reclamo numero: #"+numRecl+" Ha sido ingresado con exito con fecha: "+reclamos.getFecha();
        sendMailService.sendEmail("reclamosdajkym@gmail.com",correoUser,"Reclamo Ingresado",body);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/reclamos/usuario")
    public List<Reclamos> obtenerReclamos() throws Exception {
        return ReclamosDAO.obtenerReclamos();
    }

    @RequestMapping(method = RequestMethod.POST, value = "/reclamos/usuarioRut/")
    public ArrayList<Reclamos> obtenerReclamosPorRutGuardados(@RequestBody int rut_usuario) throws SinConexionException, SQLException {
        Usuarios usuario = UsuarioDAO.obtenerUsuariosPorID(rut_usuario);
        ArrayList<Integer> numReclamos = ReclamosDAO.obtenerReclamosPorRutGuardados(usuario.getRut());
        ArrayList<Reclamos> reclamosUsuario = ReclamosDAO.obtenerReclamosPorRut(numReclamos);
        return reclamosUsuario;
    }

    @RequestMapping(method = RequestMethod.GET, value = "/reclamos/usuario/{num_reclamo}")
    public Reclamos obtenerReclamosPorID(@PathVariable("num_reclamo") int num_reclamo) {
        return ReclamosDAO.obtenerReclamosPorID(num_reclamo);
    }

    @RequestMapping(method = RequestMethod.POST,  value = "/ADMIN/pendientes/tipo")
    public List<Reclamos> obtenerReclamosAdminTipo(@RequestBody String tipo) throws Exception {
        return ReclamosDAO.obtenerReclamosAdminFiltro(tipo);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/editarReclamo/")
    public Reclamos editarReclamos(@RequestBody Reclamos reclamos) throws SQLException, SinConexionException {
        String correoUser = UsuarioDAO.obtenerCorreoPorRut(reclamos.getRut_usuario());
        String body = "El reclamo numero: #"+reclamos.getNum_reclamo()+" Ha sido actualizado con exito!";
        sendMailService.sendEmail("reclamosdajkym@gmail.com",correoUser,"Reclamo Actualizado",body);
        return ReclamosDAO.editarReclamoPorID(reclamos);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/ADMIN/pendientes/respuesta")
    public void insertarRespuesta(@RequestBody Respuesta respuesta) throws Exception {
        Fecha fecha = new Fecha();
        String slarespuesta = fecha.compararFechas(respuesta);
        respuesta.setSLA_respuesta(slarespuesta);
        RespuestaDAO.insertarRespuesta(respuesta);
        RespuestaDAO.cambiarEstado(ReclamosDAO.obtenerReclamosPorID((int) respuesta.getNum_reclamo()));
        Reclamos reclamos = ReclamosDAO.obtenerReclamosPorID((int) respuesta.getNum_reclamo());
        String correoUser = UsuarioDAO.obtenerCorreoPorRut(reclamos.getRut_usuario());
        String body = "El reclamo numero: #"+reclamos.getNum_reclamo()+" Ha sido respondido con exito! \n\n" +
                "Texto respuesta: \n" +
                respuesta.getTexto_respuesta();
        sendMailService.sendEmail("reclamosdajkym@gmail.com",correoUser,"Respuesta reclamo",body);
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
