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
import { FiltradoUsuarioComponent } from './components/filtrado-usuario/filtrado-usuario.component';
import { FiltradoPorRutAdminComponent } from './components/filtrado-por-rut-admin/filtrado-por-rut-admin.component';
import { ReportarproblemaComponent } from './components/reportarproblema/reportarproblema.component';

// Array de rutas (Configuracion de todas las rutas al crear)

const appRoutes: Routes = [
    {path:'', component:BienvenidoComponent},
    {path:'bienvenido', component:BienvenidoComponent},
    {path:'login', component:LoginComponent},
    {path:'registro', component:RegistroComponent},
    {path:'recuperarc', component:RecuperarcComponent},
    {path:'crearCuentaEjecutivo', component:CrearCuentaEjecutivoComponent},

    {path:'nueva-contrasena', component:NuevaContrasenaComponent},
    {path:'editarc/:rut', component:EditarcComponent, canActivate: [AuthGuard]},
    {path:'main-user/:rut', component:MainUserComponent, canActivate: [AuthGuard]},
    {path:'main-ejecutivo/:rut', component:MainEjecutivoComponent, canActivate: [AuthGuard]},
    {path:'reporte/:rut', component:ReporteComponent, canActivate: [AuthGuard]},
    {path:'respuesta/:num_reclamo', component:RespuestaDeReclamoComponent, canActivate: [AuthGuard]},
    {path:'busqueda-reclamo/:rut', component:BusquedaReclamoComponent, canActivate: [AuthGuard]},
    {path:'editarEjecutivo/:rut', component:EditarCuentaEjecutivoComponent, canActivate: [AuthGuard]},
    {path:'login-ejecutivo', component:LoginEjecutivoComponent},
    {path:'editar-reclamo', component:EditarReclamoComponent, canActivate: [AuthGuard]},
    {path:'busquedareclamoejecutivo/:rut', component:BusquedareclamoejecutivoComponent, canActivate: [AuthGuard]},
    {path:'detalle/:num_reclamo', component:DetalleReclamoComponent},
    {path:'detalleAdmin/:num_reclamo', component:DetalleAdminReclamoComponent, canActivate: [AuthGuard]},
    {path:'buscando-reclamos' , component:BuscandoReclamosComponent},
    {path:'filtrado-usuario/:num_reclamo', component:FiltradoUsuarioComponent, canActivate: [AuthGuard]},
    {path:'filtrado-por-rut-admin/:rut', component: FiltradoPorRutAdminComponent, canActivate: [AuthGuard]},
    {path:'reportarproblema', component: ReportarproblemaComponent},
    {path:'**', component:ErrorComponent}


];

// Exportar el modulo de rutas
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);