package com.Reclamos.SistemaDeReclamos.API;

import com.Reclamos.SistemaDeReclamos.DAO.AdminDAO;
import com.Reclamos.SistemaDeReclamos.DAO.SinConexionException;

import com.Reclamos.SistemaDeReclamos.DAO.UsuarioDAO;
import com.Reclamos.SistemaDeReclamos.DTO.Admin;

import com.Reclamos.SistemaDeReclamos.DTO.Usuarios;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;

@RestController
@RequestMapping("/api")
public class AdminController {
    @RequestMapping(method = RequestMethod.POST, value = "/registrarEjecutivo")
    public void registrarAdmin(@RequestBody Admin admin) throws Exception {
        AdminDAO.registrarAdmin(admin);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/editarCuentaAdmin/")
    public Admin editarCuentaAdmin(@RequestBody Admin admin) throws SinConexionException, SQLException {
        return AdminDAO.editarCuentaAdmin(admin);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/editarContraseñaAdmin/")
    public Admin editarContraseñaAdmin(@RequestBody Admin admin) throws SinConexionException, SQLException {
        return AdminDAO.editarContraseñaAdmin(admin);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/DarDeBajaAdmin/{rut}/{permiso}")
    public Usuarios darBajaAdmin(@PathVariable("rut") int rut, @PathVariable("permiso") String permiso) throws SinConexionException, SQLException {
        return AdminDAO.darBajaAdmin(rut,permiso);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/loginAdmin/{correo}/{contraseña}/{rut}")
    public void loginAdmin(@PathVariable("correo") String correo, @PathVariable("contraseña") String contraseña,@PathVariable("rut") String rut) throws Exception {
        Usuarios adminLogin = AdminDAO.loginAdmin(correo,contraseña,rut);

        if (adminLogin == null){
            System.out.println("Acceso denegado a EJECUTIVO");
        }else{
            System.out.println("Acceso aprobado a EJECUTIVO");
        }
    }
}
