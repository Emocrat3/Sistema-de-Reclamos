import { Component, OnInit, Input } from '@angular/core';
import { Admin } from 'src/models/Admin';

@Component({
  selector: 'app-editar-cuenta-ejecutivo',
  templateUrl: './editar-cuenta-ejecutivo.component.html',
  styleUrls: ['./editar-cuenta-ejecutivo.component.css']
})
export class EditarCuentaEjecutivoComponent implements OnInit {
  @Input() admin: Admin;

  constructor() { }

  ngOnInit(): void {
  }

}
