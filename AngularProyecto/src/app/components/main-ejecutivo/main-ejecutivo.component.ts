import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin-service.service';
import { Location } from '@angular/common';
import { Admin } from 'src/models/Admin';
@Component({
  selector: 'app-main-ejecutivo',
  templateUrl: './main-ejecutivo.component.html',
  styleUrls: ['./main-ejecutivo.component.css']
})

export class MainEjecutivoComponent implements OnInit {
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
  
  alertaReporte(){
    alert("Problema reportado con exito");
    
}

}
