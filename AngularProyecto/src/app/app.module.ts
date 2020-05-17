import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from './app-material/app-material.module';
import { routing, appRoutingProviders } from './app.routing';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContenedorComponent } from './components/contenedor/contenedor.component';
import { WapAllComponent } from './components/wap-all/wap-all.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeadComponent } from './components/head/head.component';
import { LoginComponent } from './components/login/login.component';
import { RecuperarcComponent } from './components/recuperarc/recuperarc.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ReporteComponent } from './components/reporte/reporte.component';
import { RespuestaDeReclamoComponent } from './components/respuesta-de-reclamo/respuesta-de-reclamo.component';
import { MainEjecutivoComponent } from './components/main-ejecutivo/main-ejecutivo.component';
import { MainUserComponent } from './components/main-user/main-user.component';
import { NuevaContrasenaComponent } from './components/nueva-contrasena/nueva-contrasena.component';
import { EditarcComponent } from './components/editarc/editarc.component';
import { CrearCuentaEjecutivoComponent } from './components/crearCuentaEjecutivo/crear-cuenta-ejecutivo.component';
import { BusquedaReclamoComponent } from './components/busqueda-reclamo/busqueda-reclamo.component';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { ErrorComponent } from './components/error/error.component';
import { EditarCuentaEjecutivoComponent } from './components/editar-cuenta-ejecutivo/editar-cuenta-ejecutivo.component';
import { LoginEjecutivoComponent } from './components/login-ejecutivo/login-ejecutivo.component';
import { EditarReclamoComponent } from './components/editar-reclamo/editar-reclamo.component';
import { BusquedareclamoejecutivoComponent } from './components/busquedareclamoejecutivo/busquedareclamoejecutivo.component';
import { DetalleReclamoComponent } from './components/detalle-reclamo/detalle-reclamo.component';
import { BuscandoReclamosComponent } from './components/buscando-reclamos/buscando-reclamos.component';
import { DetalleAdminReclamoComponent } from './components/detalle-admin-reclamo/detalle-admin-reclamo.component';
import { FiltradoUsuarioComponent } from './components/filtrado-usuario/filtrado-usuario.component';
import { FiltradoPorRutAdminComponent } from './components/filtrado-por-rut-admin/filtrado-por-rut-admin.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContenedorComponent,
    WapAllComponent,
    FooterComponent,
    HeadComponent,
    LoginComponent,
    RecuperarcComponent,
    RegistroComponent,
    ReporteComponent,
    RespuestaDeReclamoComponent,
    MainEjecutivoComponent,
    MainUserComponent,
    NuevaContrasenaComponent,
    EditarcComponent,
    CrearCuentaEjecutivoComponent,
    BusquedaReclamoComponent,
    BienvenidoComponent,
    EditarCuentaEjecutivoComponent,
    ErrorComponent,
    LoginEjecutivoComponent,
    EditarReclamoComponent,
    BusquedareclamoejecutivoComponent,
    DetalleReclamoComponent,
    BuscandoReclamosComponent,
    DetalleAdminReclamoComponent,
    FiltradoUsuarioComponent,
    FiltradoPorRutAdminComponent,
    
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppMaterialModule,
    FormsModule,
    BrowserAnimationsModule,
    routing,
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }