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
        return this.http.get(this.baseUrl + 'usuario/2',{ headers: this.Headers });
    }
    postusuario(usuario:any){
         console.log(this.baseUrl + 'crearusuario',usuario);
         return this.http.post(this.baseUrl + 'crearusuario' , usuario , { headers: {'content-type': 'application/x-www-form-urlencoded' } });
    }
}