import { Component, OnInit, Input } from '@angular/core';
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

  @Input() admin : Admin;
  constructor(private adminService: AdminService,
    private ubicacion: Location, public router: Router) { }

  ngOnInit(): void {

  }

  loginAdmin(correo: string,contraseña: string, permiso: string){
    if(!correo.trim()){
      alert("Campo correo vacio");
    }
    else if(!contraseña.trim()){
      alert("Campo contraseña vacio");
    }else if(!permiso.trim()){
      alert("Campo permiso vacio");
    }
    else{
      this.adminService.loginAdmin({correo, contraseña, permiso} as Admin).subscribe(userResponse => { 
        localStorage.setItem("usuario", JSON.stringify(userResponse));

        let usuarioDatos = JSON.parse(localStorage.getItem("usuario"));
        this.router.navigate(["main-ejecutivo", usuarioDatos.rut]);

        console.log(localStorage.getItem("usuario"));
      
      
    })
   }
  }
 }

