import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-ejecutivo',
  templateUrl: './main-ejecutivo.component.html',
  styleUrls: ['./main-ejecutivo.component.css']
})

export class MainEjecutivoComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  alertaReporte(){
    alert("Problema reportado con exito");
    
}

}
