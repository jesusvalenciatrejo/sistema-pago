import { Component,  OnInit } from '@angular/core';
import { UsuarioModel } from '../../model/usuariomodel';
import { UsuarioService } from '../../service/usuarioservices';

@Component({
    selector: 'app-usuario',
    templateUrl: './usuario.component.html',
    styleUrls: ['./usuario.component.css']
})

export class UsuarioComponent implements OnInit {
    // declaracion de variavles globales y de objeto
    Usuario = new UsuarioModel();
    mostrarUsuarioActivo:any;
    mostrarUsuarioInactivo:any;
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
    data:any;

    ////////////////////////////////////////////////
    // ojo este es el nombre del archivo y esta es la clase del TS
    constructor( private usuarioservice: UsuarioService ) { }

    ngOnInit(){
      this.Usuario.IdUsuario = 0;
      this.Usuario.Nombre = "";
      this.Usuario.Apellido = "";
      this.Usuario.Telefono = 0 ;
      this.Usuario.Fecha_Nacimineto="";
      this.Usuario.Domicilio = "";
      this.Usuario.Codigo_Postal = 0;
      this.Usuario.No_Exterior = 0;
      this.Usuario.No_Interno = 0;
      this.Usuario.Fecha_Creacion = "";
      this.Usuario.Fecha_Modificacion = "";
      this.Usuario.Obserbacion = "";
      this.Usuario.Status = 0;

      this.usuarioservice.getusuario().subscribe( data => {
        this.mostrarUsuarioActivo = data;
        //console.log('hola Activos' + JSON.stringify(this.mostrarUsuarioActivo));
     });

     this.usuarioservice.getusuarioinactivo().subscribe( data => {
      this.mostrarUsuarioInactivo = data;
      //console.log('hola Activos' + JSON.stringify(this.mostrarUsuarioActivo));
    });
 
    this.mostrartabla = false;
    this.ocultartabla = true; 
  }
  UsuarioActivo():void{
    this.mostrartabla = false;
    this.ocultartabla = true; 
    this.usuarioservice.getusuario().subscribe( data => {
      this.mostrarUsuarioActivo = data;
      //console.log('hola Activos' + JSON.stringify(this.mostrarUsuarioActivo));
   });
  }
  UsuarioInactivo():void {
    this.mostrartabla = true;
    this.ocultartabla = false; 
    this.usuarioservice.getusuarioinactivo().subscribe( data => {
      this.mostrarUsuarioInactivo = data;
      //console.log('hola Activos' + JSON.stringify(this.mostrarUsuarioActivo));
    });
  }

  GuardarUsuario():void {

    this.usuarioservice.postusuario(this.Usuario).subscribe( data => {
    
    
    });

  }
}