import { Component,  OnInit } from '@angular/core';
import { UsuarioModel } from '../../model/usuariomodel';
import { PerfilModel } from '../../model/perfilmodel';
import { UsuarioService } from '../../service/usuarioservices';
import { PerfilService } from '../../service/perfilservices';

@Component({
    selector: 'app-usuario',
    templateUrl: './usuario.component.html',
    styleUrls: ['./usuario.component.css']
})

export class UsuarioComponent implements OnInit {
    // declaracion de variavles globales y de objeto
    Usuario = new UsuarioModel();
    Perfil = new PerfilModel();
    MostrarPerfilActivo:any;
    mostrarUsuarioActivo:any;
    mostrarUsuarioInactivo:any;
    id_Perfil:any;
    //boleanas

    mostrartabla = false;
    ocultartabla = true;
    validarNombre = false;
    validarApellido = false;
    validarTelefono = false;
    validarNacimeiento = false;
    validarDomicilio = false;
    validraCodigoPostal = false;
    validarNoInterno = false;
    validarNoExterno =false;
    validarStatus =false;
    validarPerfil = false;

    data:any;

    ////////////////////////////////////////////////
    // ojo este es el nombre del archivo y esta es la clase del TS
    constructor( private usuarioperfilservices: PerfilService ,private usuarioservice: UsuarioService ) { }

    ngOnInit(){
      this.Usuario.id_Usuario = 0;
      this.Usuario.id_perfil_id_Perfil = 0;
      this.Usuario.nombre = "";
      this.Usuario.apellido = "";
      this.Usuario.telefono = 0 ;
      this.Usuario.fecha_Nacimineto="";
      this.Usuario.domicilio = "";
      this.Usuario.codigo_Postal = 0;
      this.Usuario.no_Exterior = 0;
      this.Usuario.no_Interno = 0;
      this.Usuario.fecha_Creacion = "";
      this.Usuario.fecha_Modificacion = "";
      this.Usuario.obserbacion = "";
      this.Usuario.status = 0;

      this.usuarioservice.getusuario().subscribe( data => {
        this.mostrarUsuarioActivo = data;
        //console.log('hola Activos' + JSON.stringify(this.mostrarUsuarioActivo));
     });

    this.usuarioservice.getusuarioinactivo().subscribe( data => {
      this.mostrarUsuarioInactivo = data;
      //console.log('hola Activos' + JSON.stringify(this.mostrarUsuarioActivo));
    });
 
    // este es para mostrar los perfiles 
    this.usuarioperfilservices.getperfil().subscribe( data => {
    this.MostrarPerfilActivo = data;
         console.log(JSON.stringify(this.MostrarPerfilActivo));
    });

    this.mostrartabla = true;
    this.ocultartabla = false; 
    this.validarPerfil= false;
    
  }
  UsuarioActivo():void{
    this.mostrartabla = true;
    this.ocultartabla = false; 
    this.usuarioservice.getusuario().subscribe( data => {
      this.mostrarUsuarioActivo = data;
      //console.log('hola Activos' + JSON.stringify(this.mostrarUsuarioActivo));
   });
  }

  UsuarioInactivo():void {
    this.mostrartabla = false;
    this.ocultartabla = true; 
    this.usuarioservice.getusuarioinactivo().subscribe( data => {
      this.mostrarUsuarioInactivo = data;
      //console.log('hola Activos' + JSON.stringify(this.mostrarUsuarioActivo));
    });
  }

  GuardarUsuario():void {
    this.usuarioservice.postusuario(this.Usuario).subscribe( data => {
    });
  }

  cargar() {
    this.Usuario.id_perfil_id_Perfil = this.id_Perfil;
 //   console.log("hola "+this.Usuario.id_perfil_id_Perfil);
  }

}