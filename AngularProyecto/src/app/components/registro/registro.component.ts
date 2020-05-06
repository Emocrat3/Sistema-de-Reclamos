import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {



  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  

  crearcuenta(){
    alert("Cuenta creada con exito");
    setTimeout(()=> this.router.navigateByUrl("login") ,1000)
}

gotoinicio(){
  this.router.navigateByUrl("bienvenido")
}
}
