import { Component, OnInit, Input } from '@angular/core';
import { Usuarios } from 'src/models/Usuarios';
import { Location } from '@angular/common';
import { UsuariosService } from 'src/app/services/usuarios-service.service'
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-main-user',
  templateUrl: './main-user.component.html',
  styleUrls: ['./main-user.component.css']
})
export class MainUserComponent implements OnInit {
  @Input() usuario: Usuarios;

  constructor(private router: Router,
    private usuariosService: UsuariosService, 
    private ubicacion: Location,
    private ruta: ActivatedRoute) { }

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
}
