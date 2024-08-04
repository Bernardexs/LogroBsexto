import { Component } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private usuarioService:UsuarioService,private router:Router) {}
  logueo(email:any,password:any){
    this.usuarioService.login(email.value,password.value).subscribe({
      next:(datos:any)=>{
        console.log(datos)
        localStorage.setItem('user',datos.dataUser.user)
        localStorage.setItem('token',datos.token)
        localStorage.setItem('id',datos.dataUser.id)
        this.router.navigateByUrl('/principal')
      },error:(err)=>{

      }
    })

  }

}
