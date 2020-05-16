import { Component, OnInit, Input } from '@angular/core';
import { Reclamos } from 'src/models/Reclamos';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { ReclamosService } from 'src/app/services/reclamos-service.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-filtrado-usuario',
  templateUrl: './filtrado-usuario.component.html',
  styleUrls: ['./filtrado-usuario.component.css']
})
export class FiltradoUsuarioComponent implements OnInit {
  @Input() reclamos: Reclamos;
  reclamoss: Reclamos[];
  displayedColumns: string[] = ['num_reclamo','rut_usuario','tipo_problema','fecha','detalle'];
  constructor(
    private reclamosService:ReclamosService,
    private ruta: ActivatedRoute,
    private ubicacion: Location
    ) {}

    ngOnInit(){  
      this.obtenerReclamos();
    }
    obtenerReclamos() {
      this.reclamosService.obtenerReclamos()
      .subscribe(reclamos => this.reclamoss = reclamos); 
    }
    
      volver(){
        this.ubicacion.back();
      }
  
      buscar(num_reclamo: number){
        this.reclamosService.obtenerReclamosPorIDAdmin(num_reclamo)
          .subscribe(_=> this.obtenerReclamos());
      }

}
