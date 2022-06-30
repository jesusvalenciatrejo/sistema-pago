import { Component, OnInit } from '@angular/core';
import { PerfilModel } from '../../model/perfilmodel';
import { PerfilService } from '../../service/perfilservices';

@Component({
    selector: 'app-perfil',
    templateUrl: './perfil.component.html',
    styleUrls: ['./perfil.component.css']
})

export class PerfilComponent  implements OnInit {
  // declaracion de variavles globales del modelo
  // declaracion de variables

  perfilmodel = new PerfilModel();
  perfilmodelActualizar = new PerfilModel();
  filtro0 = "";
  mostrarperfil:any;
  mostrarperfilInactivo:any;
  Mostrartablaperfil = true;
  Ocultartablaperfil = false;
  validarPerfil = false;
  validarStatus = false;
  AddActiPerfil= false;
  ElimiPerfil = true;

  // ojo este es el nombre del archivo y esta es la clase del TS private perfilservice: PerfilService
  constructor( private PerfilService: PerfilService ) {
  }
  // tslint:disable-next-line: typedef
ngOnInit(){

  this.perfilmodel.id_Perfil=0;
  this.perfilmodel.nombre_Perfil = "";
  this.perfilmodel.presio_Perfil = 0;
  this.perfilmodel.fecha_Creacion = "";
  this.perfilmodel.fecha_Modificacion = "";
  this.perfilmodel.obserbacion = "";
  this.perfilmodel.status = 0;
      
  this.PerfilService.getperfil().subscribe( data => {
     this.mostrarperfil = data;
     console.log('hola Activos Perfil' + JSON.stringify(this.mostrarperfil));
  });
   this.Mostrartablaperfil = true;
   this.Ocultartablaperfil = false;
   this.AddActiPerfil= false;
   this.ElimiPerfil = true;
 
  }

  PerfilActivo():void{
    this.Mostrartablaperfil = true;
    this.Ocultartablaperfil = false; 

    this.PerfilService.getperfil().subscribe( data => {
      this.mostrarperfil = data;
      console.log('hola Activos Perfil' + JSON.stringify(this.mostrarperfil));
    });
  }

  perfilInactivo():void{
    this.Mostrartablaperfil = false;
    this.Ocultartablaperfil = true;

  this.PerfilService.getperfilinactivo().subscribe( data => {
     this.mostrarperfilInactivo = data;
     console.log('Inactivo Activos Perfil' + JSON.stringify(this.mostrarperfilInactivo));
    });
  }

  GuardarPerfil():void {
    this.PerfilService.postperfil(this.perfilmodel).subscribe( data => {
      this.PerfilActivo();

      this.AddActiPerfil= false;
     
    });
  }

  buscarperfil(perfil:any){
  this.perfilmodel.id_Perfil = perfil.id_Perfil;
  this.perfilmodel.nombre_Perfil = perfil.nombre_Perfil;
  this.perfilmodel.presio_Perfil = perfil.precio_Perfil;
  this.perfilmodel.fecha_Creacion = "";
  this.perfilmodel.fecha_Modificacion = "";
  this.perfilmodel.obserbacion = perfil.obserbacion;
  this.perfilmodel.status = perfil.status;
  this.AddActiPerfil= true;
  
  }



}