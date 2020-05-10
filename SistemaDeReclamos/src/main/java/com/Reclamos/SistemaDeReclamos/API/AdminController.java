package com.Reclamos.SistemaDeReclamos.API;

import com.Reclamos.SistemaDeReclamos.DAO.AdminDAO;
import com.Reclamos.SistemaDeReclamos.DAO.SinConexionException;

import com.Reclamos.SistemaDeReclamos.DTO.Admin;

import com.Reclamos.SistemaDeReclamos.DTO.Usuarios;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;

@RestController
@RequestMapping("/api")
@CrossOrigin (origins = "http://localhost:4200")
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

    @RequestMapping(method = RequestMethod.POST, value = "/loginAdmin/")
    public Admin loginAdmin(@RequestBody Usuarios admin) throws Exception {
        return AdminDAO.loginAdmin(admin);

    }
}
