import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  constructor(private router:Router,private usuarioService:UsuarioService) { }
  serie:any
  ngOnInit() {
  }
  logout(){
    localStorage.clear()
    this.router.navigateByUrl('/home')
  }
  busqueda(name:any){
    this.usuarioService.BuscarSerie(name.value).subscribe({
      next:(datos:any)=>{
        this.serie=datos
        console.log(datos)
      },error:(err)=>{

      }
    })

  }
  temporada(id:any){
    this.usuarioService.temporada(id).subscribe({
      next:(datos:any)=>{
        console.log(datos)
      },error:()=>{

      }
    })
  }

}
