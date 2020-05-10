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

 
  constructor( private router: Router,
     private usuariosService: UsuariosService, 
     private ubicacion: Location,
     private ruta: ActivatedRoute
     ){}
     
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
    this.usuariosService.darBajaUsuario(rut)
  }

  guardar(rut:number,nombre:string, apellido:string, correo: string, telefono: number, contraseña:string){
    this.usuariosService.editarCuenta({rut, nombre, apellido, correo, telefono, contraseña} as Usuarios)
      .subscribe(_=>this.volver());
  }
}
