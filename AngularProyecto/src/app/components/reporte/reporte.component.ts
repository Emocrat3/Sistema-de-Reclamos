import { Component, OnInit } from '@angular/core';
import { Reclamos } from 'src/models/Reclamos';
import { ReclamosService } from 'src/app/services/reclamos-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {

  constructor(private reclamosService: ReclamosService,
    private ubicacion: Location) { }

  ngOnInit(): void {
  }
  insertarReclamo(rut_usuario: number,tipo_problema: string, texto_reclamo:string, fecha:string): void{
    if(!rut_usuario){
      alert("Tipo de problema vacio");
      return;
    }
    if(!tipo_problema.trim()){
      alert("Tipo de problema vacio");
      return;
    } if (!texto_reclamo.trim()){
      alert("Texto del reclamo vacio");
      return;
    } if (!fecha.trim()){
      alert("Fecha vacia");
      return;
    }
    this.reclamosService.insertarReclamo({rut_usuario, tipo_problema, texto_reclamo, fecha} as Reclamos)
      .subscribe(_=> this.volver());
  }

  volver(): void{
    this.ubicacion.back();
  }

}
