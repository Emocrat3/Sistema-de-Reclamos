import { Component, OnInit, Input } from '@angular/core';
import { Reclamos } from 'src/models/Reclamos';
import { ActivatedRoute } from '@angular/router';
import { ReclamosService } from 'src/app/services/reclamos-service.service';
import { Location } from '@angular/common';
import { Respuesta } from 'src/models/Respuesta';

@Component({
  selector: 'app-detalle-admin-reclamo',
  templateUrl: './detalle-admin-reclamo.component.html',
  styleUrls: ['./detalle-admin-reclamo.component.css']
})
export class DetalleAdminReclamoComponent implements OnInit {
  @Input() reclamos: Reclamos;
  @Input() respuesta: Respuesta;
  
  constructor(
    private reclamosService:ReclamosService,
    private ruta: ActivatedRoute,
    private ubicacion: Location
    ) {}

    ngOnInit(): void {
      this.obtenerReclamos();
    }
  
    obtenerReclamos() {
      const num_reclamo = +this.ruta.snapshot.paramMap.get('num_reclamo');
      this.reclamosService.obtenerReclamoPorID(num_reclamo)
        .subscribe(reclamos => this.reclamos=reclamos);
    }
  
    volver(){
      this.ubicacion.back();
    }
}
