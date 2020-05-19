import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin-service.service';
import { Location } from '@angular/common';
import { Admin } from 'src/models/Admin';
import { Mail } from 'src/models/Mail';
import { MailService } from 'src/app/services/mail.service';

@Component({
  selector: 'app-reportarproblema',
  templateUrl: './reportarproblema.component.html',
  styleUrls: ['./reportarproblema.component.css']
})


export class ReportarproblemaComponent implements OnInit {
  @Input() admin: Admin;
  @Input() mail: Mail;

  constructor(
    private ubicacion: Location, 
    private router: Router,
    private adminService: AdminService, 
    private ruta: ActivatedRoute,
    private mailService: MailService) { }

  ngOnInit(): void {
    this.obtenerDatosAdmin();
  }

  volver(): void{
    this.ubicacion.back();
  }
  obtenerDatosAdmin() {
    const rut = +this.ruta.snapshot.paramMap.get('rut');
    this.adminService.obtenerAdminPorId(rut).subscribe(admin => this.admin= admin);;
  }
  confirmar(asunto: string, mensaje:string){
    this.mailService.reportarProblema({asunto, mensaje} as Mail)
      .subscribe(_=> this.volver());
  } 
}
