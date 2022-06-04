import { Component, OnInit, Injectable } from '@angular/core';
//import { AuthenticationService } from '../servicios/loginservice';
import { Router } from '@angular/router';
import { LoginModel } from '../model/loginmodel';
import { UsuarioModel } from '../model/usuariomodel';

@Component({
   // selector: 'app',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class LoginComponent implements OnInit {
  // declaracion del objeto  
  login = new LoginModel();
    
  // declaracion del objeto  
    // login: ConfiguracionModel;
usuario: UsuarioModel | undefined;

  // esta variebles son para hacer el login de los usuarios
  SessionNombre: any;
  SessionApellido: any;
  SessionPerfil: any;

  IdLogin: any;
  IdUsuarios: any;
  Nombre: any;
  ApellidoPaterno: any;
  Usuarios: any;
  Contrasena: any;
  Status: any;
//private authenticationService: AuthenticationService
  constructor(private router: Router) { }

  ngOnInit() {

    this.login = new LoginModel();
    this.login.IdLogin = 0;
    this.login.IdUsuario = 0;
    this.login.Usuario = '';
    this.login.Contrasena = '';
    this.login.Status = 0;
    
    this.usuario = new UsuarioModel();
    this.usuario.Nombre = '';
    this.usuario.Apellido = '';

      //reset login status
      //this.authenticationService.logout();
  }

  Login() {
    //  this.authenticationService.getlogin(this.login).subscribe(result => {
       // alert(result[0].Nombre);
       //   alert(result[0].Nombre + result[0].Apellido_Paterno);
      // if (result[0].cero !== null) {
      this.SessionNombre = sessionStorage.setItem('Nombre' ,"Jesus"); // result[0].Nombre 
      this.SessionApellido = sessionStorage.setItem('Apellido',"Valencia"); // result[0].Apellido_Paterno
      this.SessionPerfil = sessionStorage.setItem('Perfil' , "Administrador"); // result[0].Perfil

      //  alert(sessionStorage.getItem('Nombre') + sessionStorage.getItem('Apellido'));      
              this.router.navigateByUrl('/dashboard');
        //      } else {
          //    alert('Validar los usuarios o Contraseña ');
            //  }
        //  });



  }
}