import { Component, OnInit, Input } from '@angular/core';
import { Reclamos } from 'src/models/Reclamos';
import { ReclamosService } from 'src/app/services/reclamos-service.service';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { UsuariosService } from 'src/app/services/usuarios-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Usuarios } from 'src/models/Usuarios';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {
  @Input() reclamos: Reclamos;
  @Input() usuario: Usuarios;

  constructor(private reclamosService: ReclamosService,
    private ubicacion: Location, private router: Router,
    private usuariosService: UsuariosService, 
    private ruta: ActivatedRoute) { }

  ngOnInit(): void {
    this.obtenerDatosUsuario();
  }
  insertarReclamo(rut_usuario: number,tipo_problema: string, texto_reclamo:string, fecha:string): void{
    if(!rut_usuario){
      alert("Tipo de problema vacio");
      return;
    }
    if(!tipo_problema.trim()){
      alert("Tipo de problema vacio");
      return;
    } if (!texto_reclamo.trim()){
      alert("Texto del reclamo vacio");
      return;
    } if (!fecha.trim()){
      alert("Fecha vacia");
      return;
    }
    this.reclamosService.insertarReclamo({rut_usuario, tipo_problema, texto_reclamo, fecha} as Reclamos)
      .subscribe(_=> this.volver());
  }
  obtenerDatosUsuario() {
    const rut = +this.ruta.snapshot.paramMap.get('rut');
    this.usuariosService.obtenerUsuarioPorId(rut).subscribe(usuario => this.usuario= usuario);;
  }
  volver(): void{
    this.ubicacion.back();
  }


}
