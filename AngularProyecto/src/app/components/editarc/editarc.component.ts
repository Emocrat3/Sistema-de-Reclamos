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
export class EditarcComponent implements OnInit {
  
  @Input() usuario: Usuarios;
  mySubscription:any;
 
  constructor( private router: Router,
     private usuariosService: UsuariosService, 
     private ubicacion: Location,
     private ruta: ActivatedRoute
     ){ this.router.routeReuseStrategy.shouldReuseRoute = function () {

      return false;
    
    }; this.mySubscription = this.router.events.subscribe((event) => {
      
      if (event instanceof NavigationEnd) {
      
          // Trick the Router into believing it's last link wasn't previously loaded
      
          this.router.navigated = false;
             
      }
      
      });
  
    }
     
  ngOnInit(): void {
    this.obtenerDatosUsuario();
  }
  obtenerDatosUsuario() {
    const rut = +this.ruta.snapshot.paramMap.get('rut');
    this.usuariosService.obtenerUsuarioPorId(rut).subscribe(usuario => this.usuario= usuario);;
  }

  volver(){
    this.ubicacion.back();
  }
 

  borrar(rut: number){

    if (confirm("¿Estas seguro que te quieres dar de baja?")) {
      alert("Esperamos verte por acá pronto");
      this.usuariosService.darBajaUsuario(rut)
      .subscribe(_=>this.volver());
    } else { 
      alert("Estamos agradecidos que te hayas quedado con nosotros :D");
    }
  }

  guardar(rut:number,nombre:string, apellido:string, correo: string, telefono: number, direccion:string){
    this.usuariosService.editarCuentaUsuario({rut, nombre, apellido, correo, telefono, direccion} as Usuarios)
      .subscribe(_=>this.volver());
  }
}
