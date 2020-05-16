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
  reclamos: Reclamos[];
  @Input() reclamo: Reclamos;
  displayedColumns: string[] = ['num_reclamo','rut_usuario','tipo_problema','fecha'];
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
      const num_reclamo = +this.ruta.snapshot.paramMap.get('num_reclamo');
      this.reclamosService.obtenerReclamoPorIDAdmin(num_reclamo)
        .subscribe(reclamos => this.reclamo=reclamos);
    }
    
      volver(){
        this.ubicacion.back();
      }


}
