import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios-service.service'
import { Usuarios } from 'src/models/Usuarios';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-editarc',
  templateUrl: './editarc.component.html',
  styleUrls: ['./editarc.component.css']
})
export class EditarcComponent implements OnInit, OnDestroy {
  @Input() usuario: Usuarios;

  mySubscription: any;
 
  constructor( private router: Router,
     private usuariosService: UsuariosService, 
     private ubicacion: Location
     ){

    this.router.routeReuseStrategy.shouldReuseRoute = function () {

      return false;
    
    };
    
    this.mySubscription = this.router.events.subscribe((event) => {
      
    if (event instanceof NavigationEnd) {
    
        // Trick the Router into believing it's last link wasn't previously loaded
    
        this.router.navigated = false;         
    }
   });
  }
  ngOnDestroy(): void {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();

    }
  }
  volver(){
    this.ubicacion.back();
  }

  ngOnInit(): void {
  }

  borrar(rut: number){
    this.usuariosService.darBajaUsuario(rut)
  }

  guardar(rut:number,nombre:string, apellido:string, correo: string, telefono: number){
    this.usuariosService.editarCuenta({rut, nombre, apellido, correo, telefono} as Usuarios)
      .subscribe(_=>this.volver());
  }
}
