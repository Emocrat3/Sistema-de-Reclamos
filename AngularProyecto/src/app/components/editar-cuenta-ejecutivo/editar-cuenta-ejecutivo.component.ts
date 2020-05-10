import { Component, OnInit, Input } from '@angular/core';
import { Admin } from 'src/models/Admin';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin-service.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-editar-cuenta-ejecutivo',
  templateUrl: './editar-cuenta-ejecutivo.component.html',
  styleUrls: ['./editar-cuenta-ejecutivo.component.css']
})
export class EditarCuentaEjecutivoComponent implements OnInit {
  @Input() admin: Admin;

  constructor(private router: Router,
    private adminService: AdminService, 
    private ubicacion: Location,
    private ruta: ActivatedRoute) { }

  ngOnInit(): void {
    this.obtenerDatosAdmin();
  }
  obtenerDatosAdmin() {
    const rut = +this.ruta.snapshot.paramMap.get('rut');
    this.adminService.obtenerAdminPorId(rut).subscribe(admin => this.admin= admin);;
  }

  volver(){
    this.ubicacion.back();
  }
 

  borrar(rut: number){
    this.adminService.darBajaAdmin(rut)
  }

  guardar(rut:number,nombre:string, apellido:string, correo: string, telefono: number, contraseña:string){
    this.adminService.editarCuenta({rut, nombre, apellido, correo, telefono, contraseña} as Admin)
      .subscribe(_=>this.volver());
  }

}
