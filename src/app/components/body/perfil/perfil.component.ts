import { Component, OnInit } from '@angular/core';
//import { PerfilesModel } from '../../Model/perfilemodel';
//import { PerfilService } from '../../servicios/perfilservice';

@Component({
    selector: 'app-perfil',
    templateUrl: './perfil.component.html',
    styleUrls: ['./perfil.component.css']
})

export class PerfilComponent  implements OnInit {
  // declaracion de variavles globales del modelo
  //perfile: PerfilesModel;
  // declaracion de variable
  mostrar: any;
  mostrarInactivos: any;
  filtro  = '';
  Mostrartabla = true;
  Ocultartabla = false;
  //validaciones en 
  validarPerfil = false;
  validarStatus = false;
  // en esta son las variavle del para optener los datos de la tabla
  id: any;
  perfil: any;
  Observaciones: any;
  Status: any;
  
  // ojo este es el nombre del archivo y esta es la clase del TS private perfilservice: PerfilService
  constructor(  ) {

  }
// tslint:disable-next-line: typedef
ngOnInit(){
  /*  this.perfile = new PerfilesModel();
    this.perfile.Idperfil =  0 ;
    this.perfile.Perfil = '';
    this.perfile.Observaciones = '';
    this.perfile.FechaCreacion = '';
    this.perfile.FechaModificacion = '';
    this.perfile.Status = '';

    this.perfilservice.getPerfil().subscribe( data => {
       this.mostrar = data;
       console.log('hola' + this.mostrar);
    });

    this.perfilservice.getPerfilInactivo().subscribe( data => {
    this.mostrarInactivos = data;
    console.log('hola inactivo' + this.mostrarInactivos);
   });

    this.Mostrartabla = true;
    this.Ocultartabla = false;
*/
}
/*
    ActivoPerfil(): void {
      this.Mostrartabla = true;
      this.Ocultartabla = false;
      this.perfilservice.getPerfil().subscribe( data => {
      // console.log(data);
      this.mostrar = data;
      console.log('hola' + this.mostrar);
     });
    }

    InactivoPerfil(): void {
      this.Mostrartabla = false;
      this.Ocultartabla = true;
      this.perfilservice.getPerfilInactivo().subscribe( data => {
      this.mostrarInactivos = data;
      console.log('hola inactivo' + this.mostrarInactivos);
     });
    }
  // esta es la funcion para poder generar evento Click en el boton

  addperfil(): void {
   // console.log(this.perfile);

   if (this.perfile.Perfil === '') {
      this.validarPerfil = true;
   } else if ((this.perfile.Status === '')){
    this.validarPerfil = false; 
    this.validarStatus = true;
   } else  {
      this.validarPerfil = false;
      this.validarStatus = false;
      this.perfilservice.crearPerfil( this.perfile ).subscribe( data => {
      console.log('Los datos  post: ', data);

      if(data['uno'] == 1){
         alert('los datos Fueron Guardados Con Exito');
      }else {
        alert('Ocurrio un error Inesperado favor de validar Conección al servidor o validar los campos');
      }
      this.ActivoPerfil();
     // this.InactivoPerfil();
      this.limpiar();
     });     
    }
  }


  // tslint:disable-next-line: typedef
  buscar(idPerfil){
    this.perfilservice.Buscarcentrodearea(idPerfil).subscribe( data => {
    this.perfil = new PerfilesModel();
    this.perfile.Idperfil = data[0].Id_Perfil;
    this.perfile.Perfil = data[0].Perfil;
    this.perfile.Observaciones = data[0].Observaciones;
    this.perfile.Status = data[0].Status;
    });
  }

  // tslint:disable-next-line: typedef
  buscarIna(idPerfil){
    this.perfilservice.Buscarcentrodearea(idPerfil).subscribe( data => {
    this.perfil = new PerfilesModel();
    this.perfile.Idperfil = data[0].Id_perfil;
    this.perfile.Perfil = data[0].Perfil;
    this.perfile.Observaciones = data[0].Observaciones;
    this.perfile.Status = data[0].Status;
    });
  }

  // tslint:disable-next-line: typedef
  editarperfil() {
    this.perfilservice.crearPerfil( this.perfile ).subscribe( data => {
      console.log('Los update post: ', data['uno']);
      if(data['uno'] == 1){
        alert('La Operacion Fue Exitosa');
      } else {
        alert('Ocurrio un error inesperado favor de validar la conección al servidor o validar los campos');
     }    
  });
}

limpiar(): void {
  this.perfile = new PerfilesModel();
  this.perfile.Idperfil = 0;
  this.perfile.Perfil = '';
  this.perfile.Observaciones = '';
  this.perfile.FechaCreacion = '';
  this.perfile.FechaModificacion = '';
  this.perfile.Status = '';
  }*/
}