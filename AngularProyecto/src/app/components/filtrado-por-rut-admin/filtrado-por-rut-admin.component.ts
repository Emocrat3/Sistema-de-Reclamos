import { Component, OnInit, Input } from '@angular/core';
import { ReclamosService } from 'src/app/services/reclamos-service.service' ;
import { ActivatedRoute, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { Respuesta } from 'src/models/Respuesta';
import { Reclamos } from 'src/models/Reclamos';
import {RespuestaService} from 'src/app/services/respuesta-service.service'
import { RouterLink, Router } from '@angular/router';
import { Admin } from 'src/models/Admin';
import { AdminService } from 'src/app/services/admin-service.service';
import { UsuariosService } from 'src/app/services/usuarios-service.service';
import { Usuarios } from 'src/models/Usuarios';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-filtrado-por-rut-admin',
  templateUrl: './filtrado-por-rut-admin.component.html',
  styleUrls: ['./filtrado-por-rut-admin.component.css']
})
export class FiltradoPorRutAdminComponent implements OnInit {
  reclamos: Reclamos[];
  dataSource: MatTableDataSource<Reclamos> | null;
  @Input() usuario: Usuarios;
  displayedColumns: string[] = ['num_reclamo','rut_usuario','tipo_problema','fecha','detalle', 'responder', 'estado'];
  mySubscripcion: any;
  
  constructor( private router: Router,
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
responderReclamo(num_reclamo: number){
  this.reclamosService.responderReclamo(num_reclamo)
    .subscribe(_=>this.obtenerReclamos());
}
  obtenerDatosUsuario() {
    const rut = +this.ruta.snapshot.paramMap.get('rut');
    this.usuariosService.obtenerUsuarioPorId(rut).subscribe(usuario => this.usuario= usuario);;
  }

  volver(){
    this.ubicacion.back();
  }
}

