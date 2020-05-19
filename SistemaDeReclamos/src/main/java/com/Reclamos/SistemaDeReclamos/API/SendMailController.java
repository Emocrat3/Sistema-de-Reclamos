package com.Reclamos.SistemaDeReclamos.API;

import com.Reclamos.SistemaDeReclamos.DTO.Mail;
import com.Reclamos.SistemaDeReclamos.Servicios.SendMailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

    @RestController
    @RequestMapping("/api")
    @CrossOrigin(origins = "http://localhost:4200")
    public class SendMailController {
        @Autowired
        private SendMailService sendMailService;

        @RequestMapping(method = RequestMethod.POST, value = "/reportarproblema")
        public void registrarAdmin(@RequestBody Mail mail) throws Exception {
            sendMailService.sendEmail("reclamosdajkym@gmail.com","reclamosdajkym@gmail.com",mail.getAsunto()
                    ,mail.getMensaje());
        }
    }
