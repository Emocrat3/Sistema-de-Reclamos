import { Component, OnInit } from '@angular/core';
import {UsuariosService} from 'src/app/services/usuarios-service.service';
import { Location } from '@angular/common';
import { Usuarios } from 'src/models/Usuarios';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent implements OnInit {

  constructor(private usuariosService: UsuariosService,
    private ubicacion: Location) { }

  ngOnInit(): void {}
  
  registrarUsuario(nombre: string, apellido: string, rut: number, direccion: string , producto: string , correo: string, telefono: number, contraseña: string, contraseña1: string, permiso:string): void{
    if(!nombre){
      alert("Nombre vacio");
      return;
    }
    if(!apellido){
      alert("Apellido vacio");
      return;
    } if (!rut){
      alert("RUT vacio");
      return;
    } if (!direccion){
      alert("Direccion vacia");
      return;
    }
    if(!producto){
      alert("Producto vacio");
      return;
    } if (!correo){
      alert("Correo vacio");
      return;
    } if (!telefono){
      alert("Telefono vacia");
      return;
    }if (!contraseña){
      alert("Contraseña vacia");
      return; 
    }
    if (!contraseña1){
      alert("Contraseña vacia");
      return; 
    }if(contraseña != contraseña1){
      alert("LAS CONTRASEÑAS NO COINCIDEN");
      return;
    }

    this.usuariosService.registrarUsuario({ nombre, apellido, rut, direccion, producto, correo, telefono, contraseña, contraseña1, permiso } as Usuarios)
      .subscribe(_=> this.volver());
  }

  volver(): void{
    this.ubicacion.back();
  }

}
