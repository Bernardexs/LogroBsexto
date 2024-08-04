import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-temporada',
  templateUrl: './temporada.page.html',
  styleUrls: ['./temporada.page.scss'],
})
export class TemporadaPage implements OnInit {
  id: string | null = null;
  temporadas:any
  constructor(private usuarioService:UsuarioService,private activatedRoute:ActivatedRoute) {
   }


  ngOnInit() {
    this.temporada()
  }
  temporada(){
    this.id=this.activatedRoute.snapshot.paramMap.get('id')

    this.usuarioService.temporada(this.id).subscribe({
      next:(datos:any)=>{
        this.temporadas=datos
        console.log(datos)
      },error:()=>{

      }
    })
  }
}
