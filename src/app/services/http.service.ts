import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {

  }

  getBuscarTodos(){
    return this._http.get(environment.serviceGetbuscarTodos);
  }

  getBuscarUno(id:String){
    let url= `${environment.serviceGetbuscarUno}/${id}`;
    return this._http.get(url);
  }
  getNuevo(nombrePastelero: string, fotoPastelUrl: string){
    let url= (environment.serviceGetnuevo);
    return this._http.post(url,{nombrePastelero, fotoPastelUrl})
  }

  getIngresarComentario(id: string, puntuacion: string, comentario: string){
    let url= `${environment.serviceGetIngresarComentario}/${id}`;
    return this._http.post(url,{puntuacion, comentario})
  }
}
