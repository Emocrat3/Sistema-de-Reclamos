import { Component, OnInit, Input } from '@angular/core';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';
import { Reclamos } from 'src/models/Reclamos';
import { ReclamosService } from 'src/app/services/reclamos-service.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-busquedareclamoejecutivo',
  templateUrl: './busquedareclamoejecutivo.component.html',
  styleUrls: ['./busquedareclamoejecutivo.component.css']
})
export class BusquedareclamoejecutivoComponent implements OnInit {
  reclamos: Reclamos[];
  @Input() reclamo: Reclamos;
  displayedColumns: string[] = ['num_reclamo','rut_usuario','tipo_problema','fecha','detalle', 'responder', 'estado'];
  mySubscripcion: any;
    constructor(private ubicacion: Location,private router: Router, private reclamosService: ReclamosService, private ruta: ActivatedRoute) { 
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
  
    responderReclamo(num_reclamo: number){
      this.reclamosService.responderReclamo(num_reclamo)
        .subscribe(_=>this.obtenerReclamos());
    }
    volver(){
      this.ubicacion.back();
    }

    buscar(num_reclamo: number){
      this.reclamosService.obtenerReclamoPorIDAdmin(num_reclamo)
        .subscribe(_=> this.obtenerReclamos());
    }
}
