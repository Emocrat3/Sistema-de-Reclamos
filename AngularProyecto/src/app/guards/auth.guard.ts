import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuariosService } from '../services/usuarios-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private usuarioService: UsuariosService, private router: Router){}

  canActivate(): boolean {
  
    if(this.usuarioService.isAuthenticated()){
      return true;
    }else{
      this.router.navigate(['']);
      return false;
    }
  }
}
