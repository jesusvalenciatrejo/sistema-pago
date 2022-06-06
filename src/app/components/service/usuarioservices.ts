import { Injectable } from '@angular/core';
import { HttpClient ,  HttpHeaders } from '@angular/common/http';

@Injectable()
export class UsuarioService {

    Headers = new HttpHeaders();
  
    baseUrl = 'http://localhost:8080/api/'; 
    
    constructor( private http: HttpClient){ }
    // estos servicios se estan agarrando con la clases asociadas para u reuso
    // tslint:disable-next-line: typedef
    getusuario() {
        return this.http.get(this.baseUrl + 'usuario/1',{ headers: this.Headers });
    }
    getusuarioinactivo() {
        return this.http.get(this.baseUrl + 'usuario/0',{ headers: this.Headers });
    }
    // estos dos metodos nos ayudaran para futura programacion

    /*
    getempresautil(){
        return this.http.get(this.baseUrl + 'controllerEmprezaUtil.php?bEstato=1' , { headers: this.Headers });
    }
    // tslint:disable-next-line: typedef
    getUsuarioInactivo(){
       return this.http.get(this.baseUrl + 'controllerusuario.php?bEstato=2' , { headers: this.Headers });
    }
    // tslint:disable-next-line: typedef
    crearusuario(usuario) {
         console.log(this.baseUrl + 'controllerusuario.php' + 'ObjectUsuario', JSON.stringify(usuario));
        // tslint:disable-next-line: max-line-length
         return this.http.post(this.baseUrl + 'controllerusuario.php' , ' ObjectUsuario= ' + JSON.stringify(usuario) , { headers: {'content-type': 'application/x-www-form-urlencoded' } });
    }
    */




}