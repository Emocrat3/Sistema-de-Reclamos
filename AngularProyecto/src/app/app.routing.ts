//Importar los modulos del router de angular

import {ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';

// Importar componentes a los cuales les quiero hacer una pagina exclusiva
import {BienvenidoComponent} from './components/bienvenido/bienvenido.component';
import {BusquedaReclamoComponent} from './components/busqueda-reclamo/busqueda-reclamo.component';
import {CrearCuentaEjecutivoComponent} from './components/crearCuentaEjecutivo/crear-cuenta-ejecutivo.component';
import {EditarcComponent} from './components/editarc/editarc.component';
import {LoginComponent} from './components/login/login.component';
import {MainEjecutivoComponent} from './components/main-ejecutivo/main-ejecutivo.component';
import {MainUserComponent} from './components/main-user/main-user.component';
import {NuevaContrasenaComponent} from './components/nueva-contrasena/nueva-contrasena.component';
import {RecuperarcComponent} from './components/recuperarc/recuperarc.component';
import {RegistroComponent} from './components/registro/registro.component';
import {ReporteComponent} from './components/reporte/reporte.component';
import {RespuestaDeReclamoComponent} from './components/respuesta-de-reclamo/respuesta-de-reclamo.component';
import { ErrorComponent } from './components/error/error.component';
import { EditarCuentaEjecutivoComponent } from './components/editar-cuenta-ejecutivo/editar-cuenta-ejecutivo.component';
import { LoginEjecutivoComponent } from './components/login-ejecutivo/login-ejecutivo.component';
import { EditarReclamoComponent } from './components/editar-reclamo/editar-reclamo.component';
import { BusquedareclamoejecutivoComponent } from './components/busquedareclamoejecutivo/busquedareclamoejecutivo.component';
import { DetalleReclamoComponent } from './components/detalle-reclamo/detalle-reclamo.component';
import { BuscandoReclamosComponent } from './components/buscando-reclamos/buscando-reclamos.component';
import { DetalleAdminReclamoComponent } from './components/detalle-admin-reclamo/detalle-admin-reclamo.component';
import { AuthGuard } from './guards/auth.guard';

// Array de rutas (Configuracion de todas las rutas al crear)

const appRoutes: Routes = [
    {path:'', component:BienvenidoComponent},
    {path:'bienvenido', component:BienvenidoComponent},
    {path:'login', component:LoginComponent},
    {path:'registro', component:RegistroComponent},
    {path:'recuperarc', component:RecuperarcComponent},
    {path:'crearCuentaEjecutivo', component:CrearCuentaEjecutivoComponent},

    {path:'nueva-contrasena', component:NuevaContrasenaComponent},
    {path:'editarc', component:EditarcComponent, canActivate: [AuthGuard]},
    {path:'main-user', component:MainUserComponent, canActivate: [AuthGuard]},
    {path:'main-ejecutivo', component:MainEjecutivoComponent},
    {path:'reporte', component:ReporteComponent, canActivate: [AuthGuard]},
    {path:'respuesta/:num_reclamo', component:RespuestaDeReclamoComponent},
    {path:'busqueda-reclamo', component:BusquedaReclamoComponent, canActivate: [AuthGuard]},
    {path:'editar-cuenta-ejecutivo', component:EditarCuentaEjecutivoComponent},
    {path:'login-ejecutivo', component:LoginEjecutivoComponent},
    {path:'editar-reclamo', component:EditarReclamoComponent, canActivate: [AuthGuard]},
    {path:'busquedareclamoejecutivo', component:BusquedareclamoejecutivoComponent},
    {path:'detalle/:num_reclamo', component:DetalleReclamoComponent},
    {path:'detalleAdmin/:num_reclamo', component:DetalleAdminReclamoComponent},
    {path:'buscando-reclamos' , component:BuscandoReclamosComponent},
    {path:'**', component:ErrorComponent}


];

// Exportar el modulo de rutas
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);