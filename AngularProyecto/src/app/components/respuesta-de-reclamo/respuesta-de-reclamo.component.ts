import { Component, OnInit, Input } from '@angular/core';
import { ReclamosService } from 'src/app/services/reclamos-service.service' ;
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Respuesta } from 'src/models/Respuesta';
import { Reclamos } from 'src/models/Reclamos';
import {RespuestaService} from 'src/app/services/respuesta-service.service'

@Component({
  selector: 'app-respuesta-de-reclamo',
  templateUrl: './respuesta-de-reclamo.component.html',
  styleUrls: ['./respuesta-de-reclamo.component.css']
})
export class RespuestaDeReclamoComponent implements OnInit {
  
  @Input() respuesta: Respuesta;
  @Input() reclamos: Reclamos[];
  constructor(
    private reclamosService:ReclamosService,
    private respuestaService:RespuestaService,
    private ruta: ActivatedRoute,
    private ubicacion: Location
    ) {}

    ngOnInit(){
      this.obtenerReclamos();
    }
      obtenerReclamos() {
        this.reclamosService.obtenerReclamos()
        .subscribe(reclamos => this.reclamos = reclamos); 
      }
  volver(){
    this.ubicacion.back();
  }

  guardar(num_reclamo:number, rut_admin:number, texto_respuesta:string, fecha_respuesta:string, SLA_respuesta: string){
    this.respuestaService.insertarRespuesta({num_reclamo, rut_admin, texto_respuesta, fecha_respuesta, SLA_respuesta} as Respuesta)
      .subscribe(_=>this.volver());
  }
}
