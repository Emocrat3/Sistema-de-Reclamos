import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';
import {HttpClientModule} from '@angular/common/http';





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
import { FormsModule } from '@angular/forms';
import { BusquedareclamoejecutivoComponent } from './components/busquedareclamoejecutivo/busquedareclamoejecutivo.component';



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
    BusquedareclamoejecutivoComponent
    
    
  ],
  imports: [
    BrowserModule,
    routing, 
    FormsModule,
    HttpClientModule
    

  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
