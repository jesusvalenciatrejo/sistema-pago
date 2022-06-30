import { Injectable } from '@angular/core';
import { HttpClient ,  HttpHeaders } from '@angular/common/http';

@Injectable()
export class PerfilService {
    Headers = new HttpHeaders();
    baseUrl = 'http://localhost:8080/api/';
    
    constructor( private http: HttpClient){ }
    // estos servicios se estan agarrando con la clases asociadas para u reuso
    // tslint:disable-next-line: typedef
    
    getperfil() {
        return this.http.get(this.baseUrl + 'perfil/1',{ headers: this.Headers });
    }

    getperfilinactivo() {
        return this.http.get(this.baseUrl + 'perfil/2',{ headers: this.Headers });
    }

    postperfil(usuario:any){
         console.log(this.baseUrl + 'crearperfil',usuario);
         return this.http.post(this.baseUrl + 'crearperfil' , usuario , { headers: {'content-type': 'application/json' } });
    }
}