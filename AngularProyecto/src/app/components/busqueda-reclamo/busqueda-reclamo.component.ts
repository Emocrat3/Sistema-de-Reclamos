import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ReclamosService } from 'src/app/services/reclamos-service.service';
import { Reclamos } from 'src/models/Reclamos';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Usuarios } from 'src/models/Usuarios';
import { UsuariosService } from 'src/app/services/usuarios-service.service'
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-busqueda-reclamo',
  templateUrl: './busqueda-reclamo.component.html',
  styleUrls: ['./busqueda-reclamo.component.css']
})
export class BusquedaReclamoComponent implements OnInit, OnDestroy {

reclamos: Reclamos[];
dataSource: MatTableDataSource<Reclamos> | null;
@Input() usuario: Usuarios;
displayedColumns: string[] = ['num_reclamo','rut_usuario','tipo_problema','fecha','detalle'];
mySubscripcion: any;
  constructor(private router: Router,
     private reclamosService: ReclamosService,
       private ubicacion: Location,
       private ruta: ActivatedRoute,
       private usuariosService: UsuariosService) { 
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
  this.dataSource = new MatTableDataSource();
  this.obtenerDatosUsuario();
  this.obtenerReclamos();

}

obtenerReclamos() {
  const rut = +this.ruta.snapshot.paramMap.get('rut');
  this.reclamosService.obtenerReclamosPorRut(rut)
  .subscribe(reclamos => {
    console.log(reclamos);
    this.dataSource.data = reclamos;
    //this.dataSource = new MatTableDataSource(reclamos);
    console.log(this.dataSource);
     }); 
}
buscar(num_reclamo: number){
  this.reclamosService.obtenerReclamoPorIDAdmin(num_reclamo)
    .subscribe(_=> this.obtenerReclamos());
}
  obtenerDatosUsuario() {
    const rut = +this.ruta.snapshot.paramMap.get('rut');
    this.usuariosService.obtenerUsuarioPorId(rut).subscribe(usuario => this.usuario= usuario);;
  }

  volver(){
    this.ubicacion.back();
  }
}

