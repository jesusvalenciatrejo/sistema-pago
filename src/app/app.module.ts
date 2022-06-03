import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app/app.component';
// componenete de las rutas
import { AppRouter } from './app.routes';

//componentes de para las vistas
import { LoginComponent } from './components/login/login.component';
import { UsuarioComponent } from './components/body/usuario/usuario.component';
import { PerfilComponent } from './components/body/perfil/perfil.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { UniversidadComponent } from './components/body/universidad/universidad.component';
import { TipoUniversidadComponent } from './components/body/tipouniversidad/tipouniversidad.component';
import { DashboardComponent } from './components/body/dashboard/dashboard.component';
// prueba ojo quitarlo despues de la prueba

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent, 
    LoginComponent,
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
    FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
