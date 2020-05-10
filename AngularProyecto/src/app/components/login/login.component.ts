import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios-service.service'
import { Usuarios } from 'src/models/Usuarios';
import { Location, NgIf } from '@angular/common';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css',]
})
export class LoginComponent implements OnInit {

  constructor(private usuariosService: UsuariosService,
    private ubicacion: Location, public router: Router) { }

  ngOnInit(): void {

  }

  loginUsuario(correo: string,contraseña: string){
    if(!correo.trim()){
      alert("Campo correo vacio");
    }
    else if(!contraseña.trim()){
      alert("Campo contraseña vacio");
    }
    else{
      this.usuariosService.loginUsuario({correo, contraseña} as Usuarios).subscribe(userResponse => { 
        localStorage.setItem("usuario", JSON.stringify(userResponse));

        let usuarioDatos = JSON.parse(localStorage.getItem("usuario"));

        this.router.navigate(["userperfil", usuarioDatos.id_Usuario]);

        console.log(localStorage.getItem("usuario"));
      
    })
  }
 }
}
