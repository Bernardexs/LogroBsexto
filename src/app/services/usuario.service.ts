import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private httpClient:HttpClient) { }
  login(email:any,password:any){
    let datos = {
      email:email,
      password:password
  }    
  return  this.httpClient.post('http://127.0.0.1:3000/api/login',datos);
  }
  registrarse(user:any,email:any,password:any){
      let datos = {
        user:user,
        email:email,
        password:password
    }    
    return  this.httpClient.post('http://127.0.0.1:3000/api/register',datos);
  }
  BuscarSerie(name:any){
    return this.httpClient.get(`https://api.tvmaze.com/search/shows?q=${name}`)

  }
  temporada(id:any){
    return this.httpClient.get(`https://api.tvmaze.com/shows/${id}/seasons`)

  }
  episodios(id:any){
    return this.httpClient.get(`https://api.tvmaze.com/seasons/${id}/episodes`)

  }
}
