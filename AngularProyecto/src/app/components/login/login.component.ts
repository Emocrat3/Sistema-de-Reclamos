import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  pass: string;
  email: string;

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  validarUser(){
    var nombre = this.email;
    var pass = this.pass;
    if(nombre == "userprueba@gmail.com" && pass == "123456"){
        this.router.navigateByUrl("main-user")
                 }else {
                 alert("Usuario y/o contraseña invalidos");
}
    return;
  }
}
