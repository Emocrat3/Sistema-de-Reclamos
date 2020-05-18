package com.Reclamos.SistemaDeReclamos.API;

import com.Reclamos.SistemaDeReclamos.DAO.SinConexionException;
import com.Reclamos.SistemaDeReclamos.DAO.UsuarioDAO;
import com.Reclamos.SistemaDeReclamos.DTO.Usuarios;
import com.Reclamos.SistemaDeReclamos.Servicios.SendMailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;

@RestController
@RequestMapping("/api")
@CrossOrigin (origins = "http://localhost:4200")
public class UsuarioController {

    @Autowired
    private SendMailService sendMailService;

    @RequestMapping(method = RequestMethod.POST, value = "/registrarUsuario")
    public void registrarUsuario(@RequestBody Usuarios usuarios) throws Exception {
        UsuarioDAO.registrarUsuario(usuarios);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/editarc/{rut}")
    public Usuarios obtenerUsuarioPorId(@PathVariable("rut") int rut) throws SinConexionException, SQLException{
        return UsuarioDAO.obtenerUsuariosPorID(rut);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/editarCuentaUsuario/")
    public Usuarios editarCuentaUsuario(@RequestBody Usuarios usuarios) throws SinConexionException, SQLException {
        return UsuarioDAO.editarCuentaUsuario(usuarios);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/editarContraseñaUsuario/")
    public Usuarios editarContraseñaUsuario(@RequestBody Usuarios usuarios) throws SQLException, SinConexionException {
        String body = "Sr.(a) "+usuarios.getNombre()+" Su contraseña ha sido actualizada correctamente";
        sendMailService.sendEmail("reclamosdajkym@gmail.com",usuarios.getCorreo(),"Cambio Contraseña",body);
        return UsuarioDAO.editarContraseñaUsuario(usuarios);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/DarDeBajaUsuario/{rut}")
    public void darBajaUsuarios(@PathVariable("rut") int rut) throws SQLException {
        UsuarioDAO.setRutRespuestaVacio(rut);
        UsuarioDAO.setRutReclamosVacio(rut);
        UsuarioDAO.darBajaUsuario(rut);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/loginUsuario/")
    public Usuarios loginUsuario(@RequestBody Usuarios usuarios) throws Exception {
        return UsuarioDAO.loginUsuario(usuarios);
    }
}
