import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios-service.service'
import { Usuarios } from 'src/models/Usuarios';
import { Location, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css',]
})
export class LoginComponent implements OnInit {

  constructor(private usuariosService: UsuariosService,
    private ubicacion: Location) { }

  ngOnInit(): void {

  }

  loginUsuario(correo: string,contraseña: string): boolean{
    if(!correo){
      alert("Campo correo vacio");
      return;
    }
    if(!contraseña){
      alert("Campo contraseña");
      return;
    }

    this.usuariosService.loginUsuario({correo, contraseña} as Usuarios)
      .subscribe(_=> this.volver());

  }

  volver(): void{
    this.ubicacion.back();
  }
}
