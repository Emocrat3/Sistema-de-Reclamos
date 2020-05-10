import { Component, OnInit, Input } from '@angular/core';
import { Usuarios } from 'src/models/Usuarios';

@Component({
  selector: 'app-main-user',
  templateUrl: './main-user.component.html',
  styleUrls: ['./main-user.component.css']
})
export class MainUserComponent implements OnInit {
  @Input() usuario: Usuarios;
  constructor() { }

  ngOnInit(): void {
  }

}
