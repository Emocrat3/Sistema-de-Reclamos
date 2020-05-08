package com.Reclamos.SistemaDeReclamos.API;

import com.Reclamos.SistemaDeReclamos.DAO.SinConexionException;
import com.Reclamos.SistemaDeReclamos.DAO.UsuarioDAO;
import com.Reclamos.SistemaDeReclamos.DTO.Usuarios;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;

@RestController
@RequestMapping("/api")
@CrossOrigin (origins = "http://localhost:4200")
public class UsuarioController {

    @RequestMapping(method = RequestMethod.POST, value = "/registrarUsuario")
    public void registrarUsuario(@RequestBody Usuarios usuarios) throws Exception {
        UsuarioDAO.registrarUsuario(usuarios);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/editarCuentaUsuario/")
    public Usuarios editarCuentaUsuario(@RequestBody Usuarios usuarios) throws SinConexionException, SQLException {
        return UsuarioDAO.editarCuentaUsuario(usuarios);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/editarContraseñaUsuario/")
    public Usuarios editarContraseñaUsuario(@RequestBody Usuarios usuarios) throws SinConexionException, SQLException {
        return UsuarioDAO.editarContraseñaUsuario(usuarios);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/DarDeBajaUsuario/")
    public Usuarios darBajaUsuarios(@RequestBody Usuarios usuarios) throws SinConexionException, SQLException {
        return UsuarioDAO.darBajaUsuario(usuarios);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/loginUsuario/")
    public void loginUsuario(@RequestBody Usuarios usuarios) throws Exception {
       Usuarios usuariosLogin = UsuarioDAO.loginUsuario(usuarios.getCorreo(), usuarios.getContraseña());

       if (usuariosLogin == null){
           System.out.println("Acceso denegado a USUARIO");
       }else{
           System.out.println("Acceso aprobado a USUARIO");
       }
    }
}
