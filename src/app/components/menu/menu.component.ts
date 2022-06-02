import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
    Nombre: any;
    Apellido: any; 
    Perfil: any;

    UsuarioPerfil = true;
    
    constructor(private router: Router){}
    ngOnInit() {
       
       this.Nombre = sessionStorage.getItem('Nombre');
       this.Apellido = sessionStorage.getItem('Apellido');
       this.Perfil = sessionStorage.getItem('Perfil');
        if ((this.Nombre === null) && (this.Apellido === null) && (this.Perfil === null)) {
            this.router.navigateByUrl('/login');    
        } else { 

         }
         
         if (this.Perfil === 'Usuario Cliente') {
            this.router.navigateByUrl('/reportes');
            this.UsuarioPerfil = true ;
         }
         if (this.Perfil === 'Administrador'){
         // this.router.navigateByUrl('/perfiles');
            this.UsuarioPerfil = true ;
         }
    }
    cerrarsesion(){
           sessionStorage.removeItem("Nombre");
           sessionStorage.removeItem("Apellido"); 
           sessionStorage.removeItem("Perfil");
           this.router.navigateByUrl('/login');
    }      


    }