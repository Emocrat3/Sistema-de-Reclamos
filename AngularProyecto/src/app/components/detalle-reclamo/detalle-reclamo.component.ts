import { Component, OnInit, Input } from '@angular/core';
import { Reclamos } from 'src/models/Reclamos';
import { ReclamosService } from 'src/app/services/reclamos-service.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detalle-reclamo',
  templateUrl: './detalle-reclamo.component.html',
  styleUrls: ['./detalle-reclamo.component.css']
})
export class DetalleReclamoComponent implements OnInit{
  
  @Input() reclamos: Reclamos;

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
