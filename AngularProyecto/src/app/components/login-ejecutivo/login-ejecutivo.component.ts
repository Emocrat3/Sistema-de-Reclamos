import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-ejecutivo',
  templateUrl: './login-ejecutivo.component.html',
  styleUrls: ['./login-ejecutivo.component.css']
})
export class LoginEjecutivoComponent implements OnInit {

  pass: string;
  email: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  validarUser(){
    var nombre = this.email;
    var pass = this.pass;
      if(nombre == "admin12345" && pass == "123456"){
          this.router.navigateByUrl("main-ejecutivo")
      }else {
                 alert("Usuario y/o contraseña invalidos");
}
    return;
}

}
