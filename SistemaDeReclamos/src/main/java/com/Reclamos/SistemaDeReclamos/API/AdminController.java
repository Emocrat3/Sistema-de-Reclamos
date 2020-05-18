package com.Reclamos.SistemaDeReclamos.API;

import com.Reclamos.SistemaDeReclamos.DAO.AdminDAO;
import com.Reclamos.SistemaDeReclamos.DAO.SinConexionException;

import com.Reclamos.SistemaDeReclamos.DAO.UsuarioDAO;
import com.Reclamos.SistemaDeReclamos.DTO.Admin;

import com.Reclamos.SistemaDeReclamos.DTO.Usuarios;
import com.Reclamos.SistemaDeReclamos.Servicios.SendMailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;

@RestController
@RequestMapping("/api")
@CrossOrigin (origins = "http://localhost:4200")
public class AdminController {
    @Autowired
    private SendMailService sendMailService;

    @RequestMapping(method = RequestMethod.POST, value = "/registrarEjecutivo")
    public void registrarAdmin(@RequestBody Admin admin) throws Exception {
        AdminDAO.registrarAdmin(admin);
    }
    @RequestMapping(method = RequestMethod.GET, value = "/editarAdmin/{rut}")
    public Usuarios obtenerAdminPorId(@PathVariable("rut") int rut) throws SinConexionException, SQLException{
        return AdminDAO.obtenerAdminPorID(rut);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/editarCuentaAdmin/")
    public Admin editarCuentaAdmin(@RequestBody Admin admin) throws SinConexionException, SQLException {
        return AdminDAO.editarCuentaAdmin(admin);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/editarContraseñaAdmin/")
    public Admin editarContraseñaAdmin(@RequestBody Admin admin) throws SQLException, SinConexionException {
        String body = "Sr.(a) "+admin.getNombre()+" Su contraseña ha sido actualizada correctamente";
        sendMailService.sendEmail("reclamosdajkym@gmail.com",admin.getCorreo(),"Cambio Contraseña",body);
        return AdminDAO.editarContraseñaAdmin(admin);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/DarDeBajaAdmin/{rut}")
    public void darBajaAdmin(@PathVariable("rut") int rut) throws SinConexionException, SQLException {
        AdminDAO.setRutRespuestaVacio(rut);
        AdminDAO.setRutReclamosVacio(rut);
        AdminDAO.darBajaAdmin(rut);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/loginAdmin/")
    public Admin loginAdmin(@RequestBody Usuarios admin) throws Exception {
        return AdminDAO.loginAdmin(admin);

    }
}
