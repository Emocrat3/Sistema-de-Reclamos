import { Component, OnInit, Input } from '@angular/core';
import { Usuarios } from 'src/models/Usuarios';
import { Location } from '@angular/common';
import { UsuariosService } from 'src/app/services/usuarios-service.service'
import { Router, ActivatedRoute } from '@angular/router';
import { Reclamos } from 'src/models/Reclamos';
import { ReclamosService } from 'src/app/services/reclamos-service.service';

@Component({
  selector: 'app-main-user',
  templateUrl: './main-user.component.html',
  styleUrls: ['./main-user.component.css']
})
export class MainUserComponent implements OnInit {
  @Input() usuario: Usuarios;
  reclamos: Reclamos[];
 

  constructor(private router: Router,
    private reclamosService: ReclamosService,
    private usuariosService: UsuariosService, 
    private ubicacion: Location,
    private ruta: ActivatedRoute) { }

  ngOnInit(): void {
    this.obtenerDatosUsuario();
    this.obtenerReclamos();
  }
  obtenerReclamos() {
    this.reclamosService.obtenerReclamos()
    .subscribe(reclamos => this.reclamos = reclamos); 
  }

  obtenerDatosUsuario() {
    const rut = +this.ruta.snapshot.paramMap.get('rut');
    this.usuariosService.obtenerUsuarioPorId(rut).subscribe(usuario => this.usuario= usuario);;
  }
  buscar(rut: number){
    this.reclamosService.obtenerReclamoPorIDAdmin(rut)
      .subscribe(_=> this.obtenerReclamos());
  }

  volver(){
    this.ubicacion.back();
  }
}
