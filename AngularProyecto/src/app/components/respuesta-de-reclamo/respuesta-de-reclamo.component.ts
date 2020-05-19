import { Component, OnInit, Input } from '@angular/core';
import { ReclamosService } from 'src/app/services/reclamos-service.service' ;
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Respuesta } from 'src/models/Respuesta';
import { Reclamos } from 'src/models/Reclamos';
import {RespuestaService} from 'src/app/services/respuesta-service.service'
import { RouterLink, Router } from '@angular/router';
import { Admin } from 'src/models/Admin';
import { AdminService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-respuesta-de-reclamo',
  templateUrl: './respuesta-de-reclamo.component.html',
  styleUrls: ['./respuesta-de-reclamo.component.css']
})
export class RespuestaDeReclamoComponent implements OnInit {
  @Input() admin: Admin;
  @Input() respuesta: Respuesta;
  @Input() reclamos: Reclamos;
  
  constructor(
    private reclamosService:ReclamosService,
    private respuestaService:RespuestaService,
    private adminService: AdminService, 
    private ruta: ActivatedRoute,
    private ubicacion: Location, 
    public router: Router
    ) {}

    ngOnInit(): void {
      this.obtenerReclamos();
      this.obtenerDatosAdmin();
    }

    insertarRespuesta(num_reclamo: number, rut_admin: number, texto_respuesta: string, fecha_respuesta: string, SLA_respuesta: string): void{
    if(!texto_respuesta.trim()){
      alert("Texto de respuesta vacio")
      return;
    }if(!fecha_respuesta.trim()){
      alert("Fecha de respuesta vacio")
      return;
    }
    this.reclamosService.insertarRespuesta({num_reclamo, rut_admin, texto_respuesta, fecha_respuesta, SLA_respuesta} as Respuesta)
    .subscribe(_=> this.volver())
   }

  obtenerReclamos() {
    const num_reclamo = +this.ruta.snapshot.paramMap.get('num_reclamo');
    this.reclamosService.obtenerReclamoPorID(num_reclamo)
      .subscribe(reclamos => this.reclamos=reclamos);
  }
  obtenerDatosAdmin() {
    const rut = +this.ruta.snapshot.paramMap.get('rut');
    this.adminService.obtenerAdminPorId(rut).subscribe(admin => this.admin= admin);;
  }

  volver(){
    this.ubicacion.back();
  }

  responder(num_reclamo:number, rut_admin:number, texto_respuesta:string, fecha_respuesta:string){
    this.reclamosService.insertarRespuesta({num_reclamo, rut_admin, texto_respuesta, fecha_respuesta} as Respuesta)
      .subscribe(_=>this.volver());
      alert("Se ha respondido correctamente el reclamo, le llegara un correo al usuario, con los detalles de la respuesta")
  }
}
