import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios-service.service'
import { Usuarios } from 'src/models/Usuarios';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-editarc',
  templateUrl: './editarc.component.html',
  styleUrls: ['./editarc.component.css']
})
export class EditarcComponent implements OnInit, OnDestroy {
  usuarios: Usuarios[];
  mySubscription: any;
 
  constructor( private router: Router, private usuariosService: UsuariosService){

    this.router.routeReuseStrategy.shouldReuseRoute = function () {

      return false;
    
    };
    
    this.mySubscription = this.router.events.subscribe((event) => {
      
    if (event instanceof NavigationEnd) {
    
        // Trick the Router into believing it's last link wasn't previously loaded
    
        this.router.navigated = false;         
    }
   });
  }
  ngOnDestroy(): void {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();

    }
  }

  ngOnInit(): void {
  }

  borrar(rut: number){
    this.usuariosService.darBajaUsuario(rut)
  }

}
