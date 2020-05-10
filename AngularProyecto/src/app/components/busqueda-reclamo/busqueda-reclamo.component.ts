import { Component, OnInit, OnDestroy } from '@angular/core';
import { ReclamosService } from 'src/app/services/reclamos-service.service';
import { Reclamos } from 'src/models/Reclamos';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-busqueda-reclamo',
  templateUrl: './busqueda-reclamo.component.html',
  styleUrls: ['./busqueda-reclamo.component.css']
})
export class BusquedaReclamoComponent implements OnInit, OnDestroy {

reclamos: Reclamos[];
displayedColumns: string[] = ['num_reclamo','rut_usuario','tipo_problema','fecha','detalle'];
mySubscripcion: any;
  constructor(private router: Router,
     private reclamosService: ReclamosService,
       private ubicacion: Location) { 
    this.router.routeReuseStrategy.shouldReuseRoute = function () {

      return false;
    
  }
  this.mySubscripcion = this.router.events.subscribe((event) => {
      
    if (event instanceof NavigationEnd) {
    
        // Trick the Router into believing it's last link wasn't previously loaded
    
        this.router.navigated = false;
           
    }
    
    });

  }
  filtroReclamos='';
  ngOnDestroy(): void {
    if (this.mySubscripcion) {
      this.mySubscripcion.unsubscribe();

    }
  }
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
}

