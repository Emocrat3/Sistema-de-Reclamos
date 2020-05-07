import { Component, OnInit } from '@angular/core';
import { ReclamosService } from 'src/app/services/reclamos-service.service';
import { Reclamos } from 'src/models/Reclamos';

@Component({
  selector: 'app-busqueda-reclamo',
  templateUrl: './busqueda-reclamo.component.html',
  styleUrls: ['./busqueda-reclamo.component.css']
})
export class BusquedaReclamoComponent implements OnInit {

reclamos: Reclamos[];

  constructor(private reclamosService: ReclamosService) { }

ngOnInit(){
  this.obtenerReclamos();
}
  obtenerReclamos() {
    this.reclamosService.obtenerReclamos()
    .subscribe(reclamos => this.reclamos = reclamos); 
  }
}
