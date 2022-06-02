import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UsuarioComponent } from './components/body/usuario/usuario.component';
import { PerfilComponent } from './components/body/perfil/perfil.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';

// import { AuthGuard } from './components/authguardar/guards';

const APP_ROUTES: Routes = [
    { path: 'login' ,
      component: LoginComponent
     },
    { path: 'app-root' ,
       component: AppComponent 
     },
    { path: 'usuario' ,
     component: UsuarioComponent
     },
    { path: 'perfil' , 
    component: PerfilComponent
    },
    /*{ path: 'centroarea' ,
     component: CentroareaComponent
     },
    { path: 'empresautil',
     component: EmpresautilComponent 
    },
    { path: 'equipo' ,
     component: EquipoComponent
     },
    { path: 'tipoequipo' ,
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