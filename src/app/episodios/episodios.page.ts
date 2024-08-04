import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-episodios',
  templateUrl: './episodios.page.html',
  styleUrls: ['./episodios.page.scss'],
})
export class EpisodiosPage implements OnInit {
  id: string | null = null;
  episodioss:any
  constructor(private usuarioService:UsuarioService,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.episodes()
  }
  episodes(){
    this.id=this.activatedRoute.snapshot.paramMap.get('id')

    this.usuarioService.episodios(this.id).subscribe({
      next:(datos:any)=>{
        this.episodioss=datos
        console.log(datos)
      },error:()=>{

      }
    })
  }

}
