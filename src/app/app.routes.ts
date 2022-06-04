import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/body/dashboard/dashboard.component';
import { ConfiguracionComponent } from './components/body/configuracion/configuracion.component'
import { UsuarioComponent } from './components/body/usuario/usuario.component';
import { PerfilComponent } from './components/body/perfil/perfil.component';
import { UniversidadComponent } from './components/body/universidad/universidad.component';
import { TipoUniversidadComponent } from './components/body/tipouniversidad/tipouniversidad.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';

//import { AuthGuard } from './components/authguardar/guards';

const APP_ROUTES: Routes = [
    { path: 'login' ,
      component: LoginComponent
     },
    { path: 'app-root' ,
       component: AppComponent 
     },
     { path: 'dashboard' ,
       component: DashboardComponent
     },
     { path: 'usuario' ,
       component: UsuarioComponent
     },
     { path: 'perfil' , 
      component: PerfilComponent
     },
     { path: 'universidad' ,
      component: UniversidadComponent
     },
     { path: 'tipouniversidad',
      component: TipoUniversidadComponent 
     },
     { path: 'configuracion' ,
      component: ConfiguracionComponent
     },
    /*{ path: 'tipoequipo' ,
     component: TipoEquipoComponent
     },
    { path: 'reporacion' ,
      component: ReporacionComponent 
     },
    { path: 'reportes' , 
      component: ReporteComponent 
     },
    { path: 'historial' ,
     component: HistorialComponent
     },
    { path: 'configuracion',
      component: ConfiguracionComponent
     },*/
    { path: '**', pathMatch: 'full' , redirectTo: 'login'}
];

@NgModule({
     imports: [RouterModule.forRoot(APP_ROUTES ,{useHash: true})],
     exports: [RouterModule]
})

export class AppRouter {

}