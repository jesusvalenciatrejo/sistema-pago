import { Component,  OnInit } from '@angular/core';
//import { UsuarioService } from '../../servicios/usuarioservises';

@Component({
    selector: 'app-universidad',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
    // declaracion de variavles globales del modelo
    ////////////////////////////////////////////////
    // ojo este es el nombre del archivo y esta es la clase del TS
    constructor( /*private usuarioservice: UsuarioService*/ ) { }

    // tslint:disable-next-line: typedef
    ngOnInit(){ }
  // esta es la funcion para poder generar evento Click en el boton
}