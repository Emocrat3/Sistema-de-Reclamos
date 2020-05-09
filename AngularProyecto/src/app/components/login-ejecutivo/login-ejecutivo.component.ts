import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin-service.service'
import { Location, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { Admin } from 'src/models/Admin';

@Component({
  selector: 'app-login-ejecutivo',
  templateUrl: './login-ejecutivo.component.html',
  styleUrls: ['./login-ejecutivo.component.css']
})
export class LoginEjecutivoComponent implements OnInit {

  constructor(private adminService: AdminService,
    private ubicacion: Location) { }

  ngOnInit(): void {

  }

  loginAdmin(correo: string, contraseña: string, rut: number): boolean{
    if(!rut){
      alert("Campo rut vacio");
      return;
    }
    if(!correo){
      alert("Campo correo vacio");
      return;
    }
    if(!contraseña){
      alert("Campo contraseña");
      return;
    }
    
    this.adminService.loginAdmin({correo, contraseña, rut} as Admin)
      .subscribe(_=> this.volver());
  }
  volver(): void{
    this.ubicacion.back();
  }
}

