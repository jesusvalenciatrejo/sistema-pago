import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgChartsModule } from 'ng2-charts';

import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app/app.component';
// componenete de las rutas
import { AppRouter } from './app.routes';

//componentes de para las vistas
import { LoginComponent } from './components/login/login.component';
import { ConfiguracionComponent } from './components/body/configuracion/configuracion.component'
import { UsuarioComponent } from './components/body/usuario/usuario.component';
import { PerfilComponent } from './components/body/perfil/perfil.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { UniversidadComponent } from './components/body/universidad/universidad.component';
import { TipoUniversidadComponent } from './components/body/tipouniversidad/tipouniversidad.component';
import { DashboardComponent } from './components/body/dashboard/dashboard.component';

// importaciones de services 
import { UsuarioService } from './components/service/usuarioservices';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent, 
    LoginComponent,
    ConfiguracionComponent,
    DashboardComponent,
    UsuarioComponent,
    PerfilComponent,
    UniversidadComponent,
    TipoUniversidadComponent

  ],
  imports: [
    BrowserModule,
    AppRouter,
    HttpClientModule,
    FormsModule,
    NgChartsModule
  ],

  providers: [
    UsuarioService
  ],

  bootstrap: [AppComponent]

})
export class AppModule { }
